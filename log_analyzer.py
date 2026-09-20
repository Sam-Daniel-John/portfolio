#!/usr/bin/env python3

import re
from collections import Counter

LOG_FILE = "/var/log/suricata/fast.log"

alert_pattern = re.compile(
    r"\[\*\*\] \[\d+:(\d+):\d+\] (.*?) \[\*\*\].*?"
    r"\{(\w+)\} (\d+\.\d+\.\d+\.\d+):(\d+) -> "
    r"(\d+\.\d+\.\d+\.\d+):(\d+)"
)

alerts = []

try:
    with open(LOG_FILE, "r", encoding="utf-8", errors="ignore") as log:
        for line in log:
            match = alert_pattern.search(line)

            if match:
                sid, message, protocol, src_ip, src_port, dst_ip, dst_port = match.groups()

                alerts.append({
                    "sid": sid,
                    "message": message.strip(),
                    "protocol": protocol,
                    "src_ip": src_ip,
                    "src_port": src_port,
                    "dst_ip": dst_ip,
                    "dst_port": dst_port,
                })

except FileNotFoundError:
    print(f"Log file not found: {LOG_FILE}")
    raise SystemExit(1)


print("=" * 60)
print("LAB - SURICATA ALERT ANALYZER")
print("=" * 60)

print(f"\nTotal alerts: {len(alerts)}")

if not alerts:
    print("\nNo alerts found.")
    raise SystemExit(0)

print("\nAlerts by rule:")
rule_counts = Counter(alert["message"] for alert in alerts)

for rule, count in rule_counts.most_common():
    print(f"  {count:>3}  {rule}")

print("\nSource IPs:")
source_counts = Counter(alert["src_ip"] for alert in alerts)

for ip, count in source_counts.most_common():
    print(f"  {count:>3}  {ip}")

print("\nDestination IPs:")
destination_counts = Counter(alert["dst_ip"] for alert in alerts)

for ip, count in destination_counts.most_common():
    print(f"  {count:>3}  {ip}")

print("\nRecent alerts:")

for alert in alerts[-10:]:
    print(
        f"  [{alert['protocol']}] "
        f"{alert['src_ip']}:{alert['src_port']} -> "
        f"{alert['dst_ip']}:{alert['dst_port']} | "
        f"{alert['message']}"
    )

print("\n" + "=" * 60)

# Security Assessment and Hardening

## 1. Assessment Scope

This assessment evaluates the security posture of a Kali Linux host connected to a local network.

The assessment focused on:

- Network exposure
- Listening services
- SSH exposure
- Host firewall configuration
- Running system services
- Network discovery services

## 2. Network Exposure

The host was identified as:

- IP address: 192.168.2.76
- Interface: wlan0
- Network: 192.168.2.0/24
- Gateway: 192.168.2.1

A TCP service scan of the local host identified no open TCP ports.

## 3. Listening Services

The ss -tulpen assessment identified no listening TCP services.

Several UDP sockets were present. The primary discovery-related service was identified as wsdd, associated with Windows network discovery.

The service was investigated before making any configuration changes.

## 4. SSH Assessment

TCP port 22 was not listening and the SSH service was not active.

Therefore, SSH was not exposed on the assessed host.

## 5. Firewall Assessment

The following checks were performed:

- UFW: not installed
- iptables: not installed
- nftables: no active rules detected

No host-based packet-filtering policy was identified through these mechanisms.

## 6. Running Services

The host had 19 running system services.

Most were standard desktop, networking, device-management, authentication, and system services.

No service was disabled solely based on its presence. Services were considered in context before making hardening recommendations.

## 7. Hardening Recommendations

### Host Firewall

Deploy a host-based firewall with an explicit default-deny inbound policy.

Only required services should be permitted.

### Service Minimization

Maintain an inventory of running services and disable unnecessary services where operational requirements allow.

### Network Discovery

Review whether Windows network discovery through wsdd is required. If unnecessary, consider disabling the service to reduce network exposure.

### SSH

Keep SSH disabled when remote administration is not required.

If SSH is required in the future:

- Restrict access to trusted networks.
- Use key-based authentication.
- Disable password authentication where appropriate.
- Avoid exposing SSH directly to untrusted networks.

### Continuous Monitoring

Continue monitoring network traffic using Suricata and periodically review generated alerts.

## 8. Conclusion

The assessment established a baseline of the host's network exposure and services.

The host currently has no exposed TCP services and no active SSH service. The primary hardening opportunity identified was the absence of a host-based firewall policy.

The assessment also demonstrated a monitoring workflow using network discovery, packet capture, Suricata detection rules, and Python-based alert analysis.

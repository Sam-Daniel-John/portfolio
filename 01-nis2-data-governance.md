# Cybersecurity & Data Governance Assessment

**Type:** NIS2-oriented security and governance case study 
**Scenario:** Fictional European B2B SaaS company 
**Purpose:** Show how technical security evidence can be translated into risk, controls, ownership and remediation.

> All company details and assessment numbers in this case study are illustrative portfolio data. This is not a legal NIS2 compliance assessment.

## 01 , Company & scope

**Northstar Systems GmbH** is a fictional B2B SaaS company used for the assessment.

| Item | Scope |
|---|---|
| Employees | ~250 |
| Customers | ~1,500 |
| Environment | Microsoft 365, Active Directory, Azure, SaaS platform |
| Data | Customer PII, employee HR data, authentication data, security logs |
| Security team | 3-person IT/security team |
| Key suppliers | Cloud provider, CRM, payment provider, managed service provider |

The assessment covers identity, endpoints, cloud services, business applications, data processing, logging, incident handling, suppliers, vulnerability management and recovery.

## 02 , Asset & data inventory

| Asset | Owner | Data / function | Criticality | Main concern |
|---|---|---|---|---|
| Active Directory | IT | Identity and authentication | Critical | Privilege escalation |
| Microsoft 365 | IT | Email and business data | High | Account compromise |
| CRM | Sales | Customer data | High | Data exposure |
| Azure SaaS platform | Engineering | Customer service data | Critical | Service compromise |
| Backup system | IT | Business data | Critical | Ransomware/recovery failure |
| Wazuh/SIEM | Security | Security telemetry | High | Monitoring gaps |

The point is simple: a security assessment starts with knowing **what exists, what it does, what data it handles, and who owns it**.

## 03 , Data processing register

| Processing | Data | Purpose | System | Initial risk |
|---|---|---|---|---|
| Customer onboarding | Name, email, ID | Account creation | CRM | Medium |
| Employee management | HR data | Employment | HR platform | High |
| Security monitoring | IP, username, event logs | Threat detection | SIEM | Medium |
| Marketing | Email, preferences | Marketing | CRM | Medium |

## 04 , Technical evidence

This is where the project connects to my existing hands-on work instead of treating NIS2 as a checklist.

### Evidence A , Wazuh detection

My Wazuh Detection Engineering project uses a Windows endpoint with Sysmon telemetry and a custom Wazuh rule for suspicious PowerShell execution involving `-NoProfile` and encoded commands. A harmless simulation generated a high-severity alert.

**Evidence chain**

`Wazuh alert → suspicious PowerShell → endpoint risk → possible credential/host compromise → control requirement → owner → remediation`

**Governance interpretation:** the detection is evidence that monitoring exists, but it also raises questions about privileged access, endpoint hardening, incident response and the ownership of the affected asset.

### Evidence B , Network monitoring

My Network Security Monitoring & Detection Lab uses Nmap, Wireshark, Suricata and Python. Custom ICMP/TCP SYN rules and a Python alert analyser provide evidence of network visibility.

**Evidence chain**

`Suricata alert → source/destination → affected asset → investigation → risk → monitoring requirement → remediation`

### Evidence C , Illustrative logging gap

For this case study, the following assessment data is intentionally generated to demonstrate the method:

- 14/20 in-scope endpoints reporting the expected telemetry
- 1 critical application without central authentication logs
- Log retention not consistent across systems

**Risk:** investigators may not have enough evidence to reconstruct an attack.

**Treatment:** define required log sources, owners, retention and escalation rules.

## 05 , Risk methodology

**Risk score = Likelihood × Impact**

Each is scored from 1 to 5.

| Score | Meaning |
|---|---|
| 1 | Rare / negligible |
| 2 | Unlikely / minor |
| 3 | Possible / moderate |
| 4 | Likely / major |
| 5 | Almost certain / severe |

| Total | Rating |
|---|---|
| 1-4 | Low |
| 5-9 | Medium |
| 10-16 | High |
| 17-25 | Critical |

## 06 , Risk register

| ID | Finding | Risk | Initial | Control | Residual | Owner |
|---|---|---|---:|---|---:|---|
| R01 | Privileged accounts lack full MFA coverage | Account compromise | 20 | MFA + privileged access review | 6 | IT Security |
| R02 | Incomplete endpoint/application logging | Investigation gap | 12 | Central logging + retention standard | 6 | Security |
| R03 | Unknown or ownerless assets | Unpatched system exposure | 16 | Asset inventory + ownership | 8 | IT Operations |
| R04 | Supplier security reviews are inconsistent | Third-party compromise | 15 | Supplier classification + assessment | 8 | Procurement/Security |
| R05 | Backups are not regularly restore-tested | Recovery failure | 15 | Scheduled restore tests | 6 | IT Operations |

Residual risk is not zero because controls reduce risk rather than remove every possible threat.

## 07 , NIS2-oriented control mapping

| Finding | Risk | NIS2-oriented area | Control | Evidence | Owner |
|---|---|---|---|---|---|
| Privileged accounts lack MFA | Account compromise | Access control / risk management | MFA + access review | IAM audit | IT |
| Incomplete logging | Detection gap | Incident handling | Centralised logging | Wazuh coverage | Security |
| Unknown assets | Vulnerability exposure | Risk / vulnerability management | Asset inventory | Asset register | IT |
| Supplier lacks security review | Third-party compromise | Supply-chain security | Vendor assessment | Questionnaire | Procurement |
| Untested backups | Recovery failure | Business continuity | Restore testing | Test report | IT |

The important mapping is:

**Evidence → Finding → Risk → Control → NIS2-oriented area → Owner**

## 08 , Control maturity

| Control | Current | Target | Gap |
|---|---:|---:|---|
| Privileged MFA | 2/5 | 4/5 | Privileged accounts not fully covered |
| Asset management | 2/5 | 4/5 | Incomplete ownership |
| Logging | 3/5 | 4/5 | Coverage is inconsistent |
| Incident response | 2/5 | 4/5 | Playbooks are incomplete |
| Supplier security | 1/5 | 4/5 | No standard security assessment |

**Maturity scale:** 1 = Ad hoc, 2 = Developing, 3 = Defined, 4 = Managed, 5 = Optimised.

## 09 , Remediation backlog

| Priority | Action | Owner | Timeline | Success criterion |
|---|---|---|---|---|
| High | Enforce privileged MFA | IT | 0-30 days | 100% privileged accounts protected |
| High | Create incident playbooks | Security | 0-30 days | 3 core scenarios documented and tested |
| High | Build asset inventory | IT | 31-60 days | 100% critical assets assigned |
| Medium | Assess critical suppliers | Procurement/Security | 31-90 days | Critical suppliers reviewed |
| Medium | Improve logging coverage | Security | 31-90 days | Required sources onboarded |
| Medium | Test backup restoration | IT | 90-180 days | Restore test completed |

## 10 , Risk acceptance & review

Not every risk needs to be eliminated. A risk owner can reduce it, transfer it, avoid it, or accept the remaining exposure when it is within the organisation's risk appetite.

**Review cycle:**

`Identify → Assess → Treat → Re-score → Accept/continue treatment → Review`

Example:

**R01 privileged account compromise** 
Initial: 20/25 
Treatment: MFA + privileged access review 
Residual: 6/25 
Owner: IT Security 
Status: Monitor and review quarterly

## 11 , Outcome

The final workflow is:

**Asset → Evidence → Finding → Risk → Control → NIS2 area → Owner → Remediation → Residual risk**

This is the main skill I wanted to demonstrate: understanding the technical problem, then translating it into something an organisation can manage.

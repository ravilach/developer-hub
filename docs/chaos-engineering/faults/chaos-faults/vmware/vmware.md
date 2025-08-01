---
id: vmware
title: Chaos faults for VMware
redirect_from:
- /docs/chaos-engineering/technical-reference/chaos-faults/vmware
- /docs/chaos-engineering/chaos-faults/vmware
---

<!-- Import statement for Custom Components -->

import FaultDetailsCard from "@site/src/components/ChaosEngineering/FaultDetailsCard";
import ExperimentListSection from "@site/src/components/ChaosEngineering/ExperimentListSection"
import { experiments } from "./experiments"

<!-- Heading Description -->

<div>

## Introduction

VMware faults disrupt the resources running on a VMware cluster. Depending on the type of instance the fault targets, VMware faults are categorized into various types.

<ExperimentListSection experiments={experiments} />

<FaultDetailsCard category="vmware" subCategory="linux">

<!-- please specify category in above tag to generate correct experiment icons and links by itself, if links are broken please contact @Sahil, that's me -->

### VMware CPU hog

VMware CPU hog applies stress on the CPU resources on Linux OS based VMware VM. It checks the performance of the application running on the VMware VMs.

<Accordion color="green">
<summary>Use cases</summary>
This fault helps determine how resilient an application is when stress is applied on the CPU resources of a VMware virtual machine.
</Accordion>

</FaultDetailsCard>

<FaultDetailsCard category="vmware" subCategory="vcenter">

<!-- please specify category in above tag to generate correct experiment icons and links by itself, if links are broken please contact @Sahil, that's me -->

### VMware disk loss

VMware disk loss detaches the disks that are attached to a Linux OS based VMware VM.

<Accordion color="green">
<summary>Use cases</summary>
This fault helps determine how resilient an application is to the unplanned scaling of K8s pods.
</Accordion>

</FaultDetailsCard>

<FaultDetailsCard category="vmware" subCategory="linux">

### VMware DNS chaos

VMware DNS chaos causes DNS errors in the VMware VMs for a specific duration.
It checks the performance of the application (or process) running on the VMware VMs.

<Accordion color="green">
<summary>Use cases</summary>
This fault causes DNS errors on the target VMs which results in unavailability (or distorted) network connectivity from the VM to the target hosts. This fault provides a hypothesis wherein certain services of an application could be unreachable from the VM. This fault determines how DNS errors impact the infrastructure and standalone tasks in the application.
</Accordion>

</FaultDetailsCard>

<FaultDetailsCard category="vmware" subCategory="vcenter">

### VMware host reboot

VMware host reboot reboots a VMware host that is attached to the Vcenter.
It helps determine the VMware infrastructure resilience when the host reboots.
It also measures the infrastructure resilience in case of an high availability (HA) cluster.

<Accordion color="green">
<summary>Use cases</summary>
This fault has a high blast radius due to which all the VMs under the target host are disrupted. It measures the impact of the host reboot on the VMs and its underlying applications. It also measures the effectiveness of a HA cluster.
</Accordion>

</FaultDetailsCard>

<FaultDetailsCard category="vmware" subCategory="linux">

### VMware HTTP latency

VMware HTTP latency injects HTTP response latency into the service whose port is specified using the `TARGET_SERVICE_PORT` environment variable. This is achieved by starting the proxy server and redirecting the traffic through the proxy server.
It helps determine the application's resilience to lossy (or flaky) HTTP responses.

<Accordion color="green">
<summary>Use cases</summary>
This fault helps determine how resilient an application is to HTTP latency. It helps determine how the system recovers or fetches the responses when there is a delay in accessing the service.
</Accordion>

</FaultDetailsCard>

<FaultDetailsCard category="vmware" subCategory="linux">

### VMware HTTP modify response

VMware HTTP modify response injects HTTP chaos by modifying the status code, body or the headers, which affects the request (or response).x
Chaos is injected by starting the proxy server and redirecting the traffic through the proxy server.
It tests the application's resilience to erroneous (or incorrect) HTTP response body.
It modifies the headers of the requests and the responses of the service. This helps test the service's resilience towards incorrect or incomplete headers.

<Accordion color="green">
<summary>Use cases</summary>
This fault helps determine how resilient an application is when the status code or body or header of the request (or response) is modified. It determines the resilience of an application by how accurately the application spots incorrect HTTP response body.
</Accordion>

</FaultDetailsCard>

<FaultDetailsCard category="vmware" subCategory="linux">

### VMware HTTP reset peer

VMware HTTP reset peer injects HTTP reset chaos that stops the outgoing HTTP requests by resetting the TCP connection for the requests.
The service whose port is affected is specified using the `TARGET_SERVICE_PORT` environment variable.
It tests the application's resilience to lossy (or flaky) HTTP connections.

<Accordion color="green">
<summary>Use cases</summary>
This fault helps determine how resilient an application is when outgoing HTTP requests are halted unexpectedly. It determines how quickly and efficiently an application recovers from these unexpected halts.
</Accordion>

</FaultDetailsCard>

<FaultDetailsCard category="vmware" subCategory="linux">

### VMware IO stress

VMware IO stress causes disk stress on the target VMware VMs. It aims to verify the resilience of applications that share this disk resource with the VM.

<Accordion color="green">
<summary>Use cases</summary>
This fault helps determine how resilient an application is to unexpected spikes in resources. It determines how well an application handles unexpected stress at a given point in time.
</Accordion>

</FaultDetailsCard>

<FaultDetailsCard category="vmware" subCategory="linux">

### VMware memory hog

VMware memory hog fault consumes excessive memory resources on Linux OS based VMware VMs.
It determines the performance of the application running on the VMware VMs.

<Accordion color="green">
<summary>Use cases</summary>
This fault helps determine how resilient an application is when excessive memory is unexpectedly consumed by resources.
</Accordion>

</FaultDetailsCard>

<FaultDetailsCard category="vmware" subCategory="linux">

### VMware network latency

VMware network latency injects network packet latency from the VMware VM(s) into the application (or service).
It results in flaky access to the application.
It causes network degradation without the VM being marked as unhealthy (or unworthy) of traffic.
It checks the performance of the application (or process) running on the VMware VM(s).

<Accordion color="green">
<summary>Use cases</summary>
The VM may stall (or get corrupted) while waiting endlessly for a packet. The fault limits the impact (blast radius) to the traffic that you wish to test by specifying the IP addresses.
</Accordion>

</FaultDetailsCard>

<FaultDetailsCard category="vmware" subCategory="linux">

### VMware network loss

VMware network loss injects network packet loss from the VMware VM(s) into the application (or service).
This results in flaky access to the application.
It checks the performance of the application (or process) running on the VMware VM(s).

<Accordion color="green">
<summary>Use cases</summary>
The VM may stall (or get corrupted) while waiting endlessly for a packet. The fault limits the impact (blast radius) to the traffic that you wish to test by specifying the IP addresses.
</Accordion>

</FaultDetailsCard>

<FaultDetailsCard category="vmware" subCategory="linux">

### VMware network rate limit

VMware network rate limit fault injects network rate limit from the VMware VM(s) into the application (or service).
- This results in flaky access to the application.
- It checks the performance of the application (or process) running on the VMware VM(s).

<Accordion color="green">
<summary>Use cases</summary>

- Simulates issues within the VM network (or microservice) communication across services in different hosts.
- Determines the impact of degradation while accessing a microservice.
- Simulates network congestion by artificially limiting the available bandwidth to understand how the system behaves under reduced network capacity.
- Helps assess the impact of network rate limits on the quality of service (QoS) and compliance with service level agreements (SLAs) by observing the system's response time and performance.
- Validates whether rate-limiting mechanisms in your application or network infrastructure are functioning correctly and effectively.
- Helps assess how the system performs when network resources are constrained, mimicking real-world scenarios where network connectivity may be compromised during a disaster or outage.
- Determines how the system prioritizes and handles different types of traffic when network rate limits are in place, ensuring that critical services receive preferential treatment.

</Accordion>

</FaultDetailsCard>

<FaultDetailsCard category="vmware" subCategory="linux">

### VMware process kill

VMware process kill kills the target processes that are running as a part of a Linux OS based VMware VM.
It helps determine the resilience of an application (or process) running on the VMware VMs.

<Accordion color="green">
<summary>Use cases</summary>
This fault disrupts critical processes running within the application, such as databases or message queues. These services may be running in the VMware VM, and this fault kills their underlying processes or threads. Such faults help determine how efficiently and quickly the VMware instance recovers from the unexpected disruption.
</Accordion>

</FaultDetailsCard>

<FaultDetailsCard category="vmware" subCategory="linux">

### VMware service stop

VMware service stop stops the target system services running on a Linux OS based VMware VM.
It determines the performance and resilience of the application (or service) running on the VMware VMs.

<Accordion color="green">
<summary>Use cases</summary>
This fault helps determine how resilient an application is to random halts. It determines how efficiently an application recovers and restarts the services.
</Accordion>

</FaultDetailsCard>

<FaultDetailsCard category="vmware" subCategory="vcenter">

### VMware VM power off

VMware VM power off stops (or powers off) the VMware VMs for a specific duration.
After the duration, the VMs are back to original state.
It checks the performance of the application running on the VMware VMs.

<Accordion color="green">
<summary>Use cases</summary>
This fault helps determine how resilient an application is to random power failures. It determines how efficiently an application recovers and restarts the services.
</Accordion>

</FaultDetailsCard>

<FaultDetailsCard category="vmware" subCategory="windows">

### VMware Windows blackhole chaos

VMware Windows blackhole chaos blocks traffic to specified IP addresses on Windows OS based VMware VM. It checks the performance of the application running on the VMware VMs.

<Accordion color="green">
<summary>Use cases</summary>
This fault helps determine how resilient an application is when network access to certain IP addresses is blocked on a VMware virtual machine.
</Accordion>

</FaultDetailsCard>

<FaultDetailsCard category="vmware" subCategory="windows">

### VMware Windows CPU hog

VMware Windows CPU hog applies stress on the CPU resources on Windows OS based VMware VM. It checks the performance of the application running on the VMware VMs.

<Accordion color="green">
<summary>Use cases</summary>
This fault helps determine how resilient an application is when stress is applied on the CPU resources of a VMware virtual machine.
</Accordion>

</FaultDetailsCard>

<FaultDetailsCard category="vmware" subCategory="windows">

### VMware Windows disk stress

VMware Windows disk stress fills the disk space on Windows OS based VMware VM. It checks the performance of the application running on the VMware VMs.

<Accordion color="green">
<summary>Use cases</summary>
This fault helps determine how resilient an application is when the disk space is filled on a VMware virtual machine.
</Accordion>

</FaultDetailsCard>

<FaultDetailsCard category="vmware" subCategory="windows">

### VMware Windows memory hog

VMware Windows memory hog applies stress on the memory resources on Windows OS based VMware VM. It checks the performance of the application running on the VMware VMs.

<Accordion color="green">
<summary>Use cases</summary>

- This fault helps determine how resilient an application is when stress is applied on the memory resources of a VMware virtual machine.

</Accordion>

</FaultDetailsCard>

<FaultDetailsCard category="vmware" subCategory="windows">

### VMware Windows network corruption

VMware Windows network corruption corrupts network packets on Windows OS based VMware VM. It checks the performance of the application running on the VMware VMs.

<Accordion color="green">
<summary>Use cases</summary>

- This fault helps determine how resilient an application is when network packets are corrupted on a VMware virtual machine.

</Accordion>

</FaultDetailsCard>

<FaultDetailsCard category="vmware" subCategory="windows">

### VMware Windows network duplication

VMware Windows network duplication duplicates network packets on Windows OS based VMware VM. It checks the performance of the application running on the VMware VMs.

<Accordion color="green">
<summary>Use cases</summary>

- This fault helps determine how resilient an application is when network packets are duplicated on a VMware virtual machine.

</Accordion>

</FaultDetailsCard>

<FaultDetailsCard category="vmware" subCategory="windows">

### VMware Windows network latency

VMware Windows network latency injects network latency on Windows OS based VMware VM. It checks the performance of the application running on the VMware VMs.

<Accordion color="green">
<summary>Use cases</summary>

- This fault helps determine how resilient an application is when network latency is introduced on a VMware virtual machine.

</Accordion>

</FaultDetailsCard>

<FaultDetailsCard category="vmware" subCategory="windows">

### VMware Windows network loss

VMware Windows network loss injects network packet loss on Windows OS based VMware VM. It checks the performance of the application running on the VMware VMs.

<Accordion color="green">
<summary>Use cases</summary>

- This fault helps determine how resilient an application is when network packet loss is introduced on a VMware virtual machine.

</Accordion>

</FaultDetailsCard>

<FaultDetailsCard category="vmware" subCategory="windows">

### VMware Windows process kill

VMware Windows process kill kills a specified process on Windows OS based VMware VM. It checks the performance of the application running on the VMware VMs.

<Accordion color="green">
<summary>Use cases</summary>

- This fault helps determine how resilient an application is when a specific process is killed on a VMware virtual machine.

</Accordion>

</FaultDetailsCard>

<FaultDetailsCard category="vmware" subCategory="windows">

### VMware Windows service stop

VMware Windows service stop stops a specified service on Windows OS based VMware VM. It checks the performance of the application running on the VMware VMs.

<Accordion color="green">
<summary>Use cases</summary>

- This fault helps determine how resilient an application is when a specific service is stopped on a VMware virtual machine.

</Accordion>

</FaultDetailsCard>

<FaultDetailsCard category="vmware" subCategory="windows">

### VMware Windows time chaos

VMware Windows time chaos manipulates the system time on Windows OS based VMware VM. It checks the performance of the application running on the VMware VMs.

<Accordion color="green">
<summary>Use cases</summary>

- This fault helps determine how resilient an application is when the system time is manipulated on a VMware virtual machine.

</Accordion>

</FaultDetailsCard>

</div>

---
title: Graceful delegate shutdown
description: Read about the process of graceful delegate shutdown.
sidebar_position: 5
---

Harness Delegate is designed to shut down gracefully.

## Shutdown without upgrade

The process of graceful delegate shutdown without upgrade is as follows:

- The delegate receives an instruction to quit.
- A grace period begins during which the delegate:
  + Stops accepting new tasks.
  + Works to complete running tasks.
- The grace period ends.
- Delegates that have not quit are force-terminated.
- Incomplete tasks are discarded.

## Shutdown with upgrade

The process of graceful delegate shutdown with `upgrader` is as follows:

- When `upgrader` updates the delegate image, it starts a new delegate and waits for a heartbeat and healthy state.
- When the delegate is connected, `upgrader` terminates the old pod. However, the old pod will not be terminated immediately. It will first
   - Stop accepting new tasks.
   - Wait for currently executing tasks to finish before terminating. The maximum time `upgrader` waits for tasks to finish before force-termination is 10 minutes.
:::info
The wait time before force-termination is configured using `terminationGracePeriodSeconds` in the Kubernetes delegate YAML. When you download the YAML from Harness, it's set to 10 minutes by default.

:::
## Grace period

import Deleos from '/docs/platform/shared/delegate-legacy-eos.md'

<Deleos />

The length of the grace period is configurable.

| **Delegate type** | **Grace period** | **Default interval** |
| :-- | :--: | :--: |
| Immutable image | Yes | Configurable (details below)  |
| Legacy image | No | 30 seconds |

:::info note
The grace period is not currently configurable for Helm deployments.

:::

### Configure the default interval for a Kubernetes deployment

Open the delegate manifest file and locate the container `spec` (`spec.containers`). Change the `terminationGracePeriodSeconds` as shown in the following YAML. In the example below, `terminationGracePeriodSeconds` is set to 10 minutes.

```yaml
 spec:
     terminationGracePeriodSeconds: 600
     restartPolicy: Always
     containers:
     - image: example/org:custom-delegate
       imagePullPolicy: Always
       name: delegate
       securityContext:
         allowPrivilegeEscalation: false
         runAsUser: 0
```

### Configure the default interval for an Amazon ECS deployment

Open the delegate manifest file and locate the container `containerDefinitions`. Change the `stopTimeout` as shown in the following JSON. In the example below, `stopTimeout` is set to 10 minutes.

:::info note
For more information on `stopTimeout`, go to [Container timeouts](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_definition_parameters.html#container_definition_timeout) in the Amazon ECS documentation.
:::

   ```json
     {
       "containerDefinitions": [
         {
           "portMappings": [
             {
               "hostPort": 8080,
               "protocol": "tcp",
               "containerPort": 8080
             }
           ],
           "cpu": 1,
           "environment": [
             {
               "name": "ACCOUNT_ID",
               "value": "<ACCOUNT_ID>"
             },
             {
               "name": "DELEGATE_TOKEN",
               "value": "<DELEGATE_TOKEN>"
             },
             {
               "name": "DELEGATE_TYPE",
               "value": "DOCKER"
             },
             {
               "name": "INIT_SCRIPT",
               "value": ""
             },
             {
               "name": "MANAGER_HOST_AND_PORT",
               "value": "<MANAGER_HOST_AND_PORT>"
             },
             {
               "name": "DELEGATE_NAME",
               "value": "<DELEGATE_NAME>"
             },
            {
               "name": "DELEGATE_TAGS",
               "value": ""
             },

             {
               "name": "NEXT_GEN",
               "value": "true"
             }
            ],
           "memory": 2048,
           "image": "harness/delegate:22.12.77802",
           "essential": true,
           "hostname": "<DELEGATE_HOST>",
           "name": "<DELEGATE_NAME>",
           "stopTimeout": 120
         }
       ],
         "memory": "2048",
         "requiresCompatibilities": [
         "EC2"
       ],

       "cpu": "1024",
       "family": "harness-delegate-task-spec"
     }
   ```

### Configure the default interval for a Docker deployment

For Docker deployments, you use the `docker stop` command to set the default interval. In the example below, the interval is set to 10 minutes.

```
docker container stop -t=600 <delegatename>
```

:::info note
In the syntax above, you can choose to use `--time` or `-t`.
:::

## Graceful shutdown events

The event that initiates the graceful shutdown depends on delegate type.

| **Delegate environment** | **Trigger**
| :-- | :--:
| Kubernetes | Pod termination, eviction, or user-initiated scaling
| Docker | `docker stop` command
| Shell | `./stop.sh` instruction

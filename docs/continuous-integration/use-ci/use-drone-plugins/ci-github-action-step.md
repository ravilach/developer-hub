---
title: Use the GitHub Action step
description: Run GitHub Actions in your Harness CI pipelines.
sidebar_position: 70
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

[GitHub Actions](https://docs.github.com/en/actions/learn-github-actions/understanding-github-actions) is a GitHub feature that enables you to automate various event-driven activities in GitHub, such as cloning a repository, generating Docker images, and testing scripts. You can find over 10,000 GitHub Actions on the [GitHub Marketplace](https://github.com/marketplace?type=actions) or create your own Actions.

You can use the **GitHub Action plugin** step (also called the **GitHub Action** step or **Action** step) to run GitHub Actions in your [Harness CI pipelines](../prep-ci-pipeline-components.md).

:::info

Currently, the **GitHub Action** step is supported for Harness Cloud build infrastructure only.

For other build infrastructures, you can use the [GitHub Actions Drone plugin in a Plugin step](./run-a-git-hub-action-in-cie.md).

For more information about using plugins in CI pipelines, go to [Explore plugins](./explore-ci-plugins.md).

:::

## Action step usage examples

The following YAML examples use **GitHub Action** steps (`Action` steps) to set up Node.js, Go, Java, and Ruby environments.

<Tabs>
<TabItem value="js" label="Setup Node.js" default>

This `Action` step uses the `actions/setup-node` GitHub Action to set up a Node.js environment that the subsequent steps in the stage can use.

```yaml
              - step:
                  type: Action
                  name: setup nodejs
                  identifier: setup_nodejs
                  spec:
                    uses: actions/setup-node@v3
                    with:
                      node-version: '16'
```

</TabItem>
<TabItem value="Go" label="Setup Golang">

This `Action` step uses the `actions/setup-go` GitHub Action to set up a Go environment that the subsequent steps in the stage can use. It specifies Go 1.17.

```yaml
              - step:
                  type: Action
                  name: setup golang
                  identifier: setup_go
                  spec:
                    uses: actions/setup-go@v3
                    with:
                      go-version: '1.17'
```

</TabItem>
<TabItem value="Java" label="Setup Java">

This `Action` step uses the `actions/setup-java` GitHub Action to set up a Java environment that the subsequent steps in the stage can use. It specifies Java 17.

```yaml
              - step:
                  type: Action
                  name: setup java
                  identifier: setup_java
                  spec:
                    uses: actions/setup-java@v3
                    with:
                      distribution: 'temurin'
                      java-version: '17'
```

</TabItem>
<TabItem value="Ruby" label="Setup Ruby">

This `Action` step uses the `ruby/setup-ruby` GitHub Action to set up a Ruby environment that the subsequent steps in the stage can use. It specifies Ruby 2.7.2.

```yaml
              - step:
                  type: Action
                  name: setup ruby
                  identifier: setup_ruby
                  spec:
                    uses: ruby/setup-ruby@v1
                    with:
                      ruby-version: '2.7.2'
```

</TabItem>
</Tabs>

## Action step settings and specifications

<Tabs>
  <TabItem value="YAML" label="YAML editor" default>

To add a **GitHub Action** step in the YAML editor, add an `Action` step, for example:

```yaml
              - step:
                  type: Action
                  name: setup golang
                  identifier: setup_go
                  spec:
                    uses: actions/setup-go@v3
                    with:
                      go-version: '1.17'
```

The `spec` parameters define which Action to use, the Action settings, and environment variables that you need to pass to the Action. These are configured according to the GitHub Action's usage specifications.

* `uses:` Specify the Action's repo, along with a branch or tag, such as `actions/stepup-go@v3`.
* `with:` If required by the Action, provide a mapping of key-value pairs representing Action settings, such as `go-version: '1.17'`.
* `env:` If required by the Action, provide a mapping of environment variables to pass to the Action. Note that `env` specifies incoming environment variables, which are separate from outgoing environment variables that may be output by the Action.

The following cases *always* require environment variables (`env`):

* [Private Action repos](#private-action-repositories)
* [Parallel Actions](#parallel-actions)
* [Actions requiring a defined working directory](#actions-requiring-a-defined-working-directory)

:::tip Tips

* If you already configured GitHub Actions elsewhere, you can quickly [transfer GitHub Actions into Harness CI](#transfer-github-actions-into-harness-ci) by copying the `spec` details from your existing GitHub Actions YAML.
* You can use variable expressions in the `with` and `env` settings. For example, `credentials: <+stage.variables.[TOKEN_SECRET]>` uses a [stage variable](/docs/platform/pipelines/add-a-stage#stage-variables) to call a token stored as a [Harness secret](/docs/category/secrets).
* For GitHub Actions steps, `with` mappings are automatically exported as [output variables](#output-variables-from-github-actions-steps).

:::

</TabItem>
  <TabItem value="visual" label="Visual editor">

1. Add the **GitHub Action plugin** step to your pipeline's **Build** stage.
2. Enter a **Name** and optional **Description**.

   Harness automatically assigns an **Id** ([Entity Identifier Reference](../../../platform/references/entity-identifier-reference.md)) based on the **Name**. You can change the **Id**.

3. For **Uses**, specify the repo and branch or tag of the GitHub Action that you want to use, for example `actions/setup-go@v3`.

   Refer to the GitHub Action's README for information about branches and tags.

4. If required by the Action, add key-value pairs representing GitHub Action settings in the **Settings** field under **Optional Configuration**. For example, you would specify `go-version: '>=1.17.0'` by entering `go-version` in the key field and `>=1.17.0` in the value field.

   Most Actions require settings. Refer to the GitHub Action's `with` usage specifications in the Action's README for details about specific settings available for the Action that you want to use.

5. If required by the Action, add key-value pairs representing environment variables that you want to pass to the GitHub Action in the **Environment Variables** field under **Optional Configuration**. For example, you would specify `GITHUB_TOKEN: <+secrets.getValue("github_pat")>` by entering `GITHUB_TOKEN` in the key field and `<+secrets.getValue("github_pat")>` in the value field.

   Refer to the GitHub Action's `env` usage specifications for details about specific settings available for the Action that you want to use. Note that `env` specifies incoming environment variables, which are separate from outgoing environment variables that may be output by the Action.

   The following cases *always* require environment variables:

   * [Private Action repos](#private-action-repositories)
   * [Parallel Actions](#parallel-actions)
   * [Actions requiring a defined working directory](#actions-requiring-a-defined-working-directory)

6. Optionally, you can set the **Timeout**. Once the timeout limit is reached, the step fails and pipeline execution continues. To set skip conditions or failure handling for steps, go to:

   * [Step Skip Condition settings](/docs/platform/pipelines/step-skip-condition-settings.md)
   * [Step Failure Strategy settings](/docs/platform/pipelines/failure-handling/define-a-failure-strategy-on-stages-and-steps)

:::tip Tips

* You can use fixed values, runtime inputs, or variable expressions for **Settings** and **Environment Variables** values. For example, `<+stage.variables.[TOKEN_SECRET]>` is a variable expression [stage variable](/docs/platform/pipelines/add-a-stage#stage-variables) that calls a token stored as a [Harness secret](/docs/category/secrets).
* For GitHub Actions steps, **Settings** are automatically exported as [output variables](#output-variables-from-github-actions-steps).

:::

</TabItem>
</Tabs>

<details>
<summary>YAML example: Pipeline with an Action step</summary>

This pipeline uses a **GitHub Action** step to install golang version 1.19.5. It then compiles the golang application and runs tests.

```yaml
pipeline:
  name: Build and test golang application
  identifier: Build_test_golang
  projectIdentifier: default
  orgIdentifier: default
  tags: {}
  properties:
    ci:
      codebase:
        connectorRef: YOUR_CODEBASE_CONNECTOR_ID
        build: <+input>
  stages:
    - stage:
        name: Build golang application
        identifier: Build_golang_application
        description: ""
        type: CI
        spec:
          cloneCodebase: true
          platform:
            os: Linux
            arch: Amd64
          runtime:
            type: Cloud
            spec: {}
          execution:
            steps:
              - step:
                  type: Action
                  name: setup golang
                  identifier: setup_go
                  spec:
                    uses: actions/setup-go@v3
                    with:
                      go-version: 1.19.5
              - step:
                  type: Run
                  name: Build and test
                  identifier: Build_and_test
                  spec:
                    shell: Bash
                    command: |-
                      go build .
                      go test -v ./...
```

</details>

### Private Action repositories

If you want to use an Action that is in a private repository, you must provide the `GITHUB_TOKEN` environment variable. You need a [GitHub personal access token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) that has pull permissions to the target repository. Additional permissions may be necessary depending on the Action's purpose.

<Tabs>
  <TabItem value="YAML" label="YAML editor" default>

In the YAML editor, add `GITHUB_TOKEN` to the `env` mapping, for example:

```yaml
- step:
    type: Action
    name: hello world
    identifier: hello_world
    spec:
      uses: my-actions-repo/hello-world-javascript-action@main
      with:
        who-to-greet: 'Mona the Octocat'
      env:
        GITHUB_TOKEN: <+secrets.getValue("[SECRET_NAME]")>
```

:::tip

You can use a variable expressions, such as `<+secrets.getValue("[SECRET_NAME]")>`, to call a token stored as a Harness Secret.

:::

For more information about configuring the Action step's settings, go to the [Action step settings and specifications](#action-step-settings-and-specifications) section, above.

</TabItem>
  <TabItem value="Visual" label="Visual editor">

In the Visual editor, specify `GITHUB_TOKEN` in the **Environment Variables**. Enter `GITHUB_TOKEN` in the key field and the token or variable expression in the value field, for example:

* Key: `GITHUB_TOKEN`
* Value: `<+secrets.getValue("[SECRET_NAME]")>`

:::tip

You can use a variable expressions, such as `<+secrets.getValue("[SECRET_NAME]")>`, to call a token stored as a Harness Secret.

:::

For more information about configuring the Action step's settings, go to the [Action step settings and specifications](#action-step-settings-and-specifications) section, above.

</TabItem>
</Tabs>

### Parallel Actions

If you run multiple instances of the same GitHub Action, either in parallel or with a looping strategy, you must set the `XDG_CACHE_HOME` environment variable.

The default value of this variable is `/home/ubuntu/.cache`; however, the `XDG_CACHE_HOME` variable must have a different value for each instance of the Action. If you have separate steps running in parallel, assign distinct values to each step, such as `XDG_CACHE_HOME: /home/ubuntu/.cache1`. If you apply a looping strategy to repeat one step multiple times, you can use an expression to generate distinct values, such as `XDG_CACHE_HOME: /home/ubuntu/.cache<+step.identifier>`.

In this example, two parallel `Action` steps run the same GitHub Action. Each step has a unique value for `XDG_CACHE_HOME`.

```yaml
            steps:
              - parallel
                  - step:
                      type: Action
                      name: gcsuploader
                      identifier: gcsuploader
                      spec:
                        uses: google-github-actions/upload-cloud-storage@main
                        with:
                          path: pom.xml
                          destination: cie-demo-pipeline/target
                          credentials: <+stage.variables.GCP_SECRET_KEY_BASE64>
                         env:
                          XDG_CACHE_HOME: /home/ubuntu/.cache1
                  - step:
                      type: Action
                      name: gcsuploader2
                      identifier: gcsuploader2
                      spec:
                        uses: google-github-actions/upload-cloud-storage@main
                        with:
                          path: pom.xml
                          destination: cie-prod-pipeline/target
                          credentials: <+stage.variables.GCP_SECRET_KEY_BASE64>
                         env:
                          XDG_CACHE_HOME: /home/ubuntu/.cache2
```

### Actions requiring a defined working directory

Some GitHub Actions need to run on the cloned [codebase](/docs/continuous-integration/use-ci/codebase-configuration/create-and-configure-a-codebase). The Action step doesn't automatically set a working directory.

If this is required by the Action you want to run, and the Action offers a working directory parameter, then you need to specify the working directory as `/harness`. For example:

```yaml
              - step:
                  type: Action
                  name: Action docker publish image
                  identifier: Action_docker_publish_image
                  spec:
                    uses: elgohr/Publish-Docker-Github-Action@v4
                    with:
                      name: dockerhub/publish-docker-image
                      username: ${{ secrets.DOCKER_USERNAME }}
                      password: ${{ secrets.DOCKER_PASSWORD }}
                      workdir: /harness
```

If the Action ingests the working directory as an environment variable, place it under `env`.

If the Action doesn't offer a way to set a working directory, it most likely won't run in Harness.

### Output variables from GitHub Actions steps

Output variables are exposed values that can be used by other steps or stages in the pipeline. For GitHub Actions steps, **Settings** (`with`) values are automatically exported as output variables, and you can fetch those values in later steps or stages in the same pipeline.

To reference an output variable in another step in the same stage, use either of the following expressions:

```
<+steps.STEP_ID.output.outputVariables.VAR_NAME>
<+execution.steps.STEP_ID.output.outputVariables.VAR_NAME>
```

To reference an output variable in a stage other than the one where the output variable originated, use either of the following expressions:

```
<+stages.STAGE_ID.spec.execution.steps.STEP_ID.output.outputVariables.VAR_NAME>
<+pipeline.stages.STAGE_ID.spec.execution.steps.STEP_ID.output.outputVariables.VAR_NAME>
```

For each expression:

* Replace `STEP_ID` with the ID of the GitHub Actions step
* Replace `VAR_NAME` with the relevant variable name, wrapped in quotes.
* In cross-stage references, replace `STAGE_ID` with the ID of the stage where the GitHub Actions step exists.

:::warning

GitHub Actions settings keys can include `-`, which is not supported by JEXL. Therefore, you must wrap these variable names in quotes when using them in Harness expressions.

:::

<details>
<summary>YAML example: GitHub Actions output variable</summary>

In the following YAML example, the `setup_go` step uses a `go-version` setting, which is automatically exported as an output variable. The `beta` step includes two expressions referencing the `go-version` output variable.

```yaml
              - step:
                  type: Action
                  name: setup golang
                  identifier: setup_go
                  spec:
                    uses: actions/setup-go@v3
                    with:
                      go-version: `1.17`
              - step:
                  type: Run
                  name: beta
                  identifier: beta
                  spec:
                    shell: Sh
                    command: |-
                      echo <+steps.setup_go.output.outputVariables."go-version">
                      echo <+execution.steps.setup_go.output.outputVariables."go-version">
```

</details>

## Transfer GitHub Actions into Harness CI

If you already configured GitHub Actions elsewhere, you can copy the `uses`, `with` and `env` lines from your GitHub Action YAML into the `Action` step's `spec` in your Harness CI pipeline YAML.

If you're using the Visual editor, you can transfer the data into the **Uses**, **Settings**, and **Environment Variables** fields.

The following table compares GitHub Action YAML with Harness CI Action step YAML. Notice the consistency of `uses`, `with`, and `env`.

<table>
<tr>
  <td>GitHub Action YAML</td>
  <td>Harness CI Action step YAML</td>
</tr>
<tr>
<td>

```yaml
- name: hello-world
  uses: actions/hello-world-javascript-action@main
  with:
    who-to-greet: 'Mona the Octocat'
  env:
    hello: world
```

</td>
<td>

```yaml
- step:
    type: Action
    name: hello world
    identifier: hello_world
    spec:
      uses: actions/hello-world-javascript-action@main
      with:
        who-to-greet: 'Mona the Octocat'
      env:
        hello: world
```

</td>
</tr>
</table>

## Support for GitHub Actions on VM and Local Runner Build Infrastructure

### Prerequisites for self-managed VM infrastructure

To support GitHub Action steps in your self-managed VM infrastructure, your build VMs must include a few additional tools at runtime.

These tools are required for the GitHub Actions runners embedded within the Harness build process.

#### Required tools
Ensure that all build VMs (those provisioned by your runner) include:

- nodejs version 16 or higher

- python3 (with python pointing to python3)

- golang

- A correctly set HOME environment variable

These are prerequisites for the GitHub Actions step runtimes and are not automatically installed by Harness.

#### Recommended: Install via user_data script
To automate provisioning of these tools, you can inject setup commands through the runner’s `user_data` in your `pool.yml`.

Here’s an example for Linux-based VMs:

```yaml
user_data: |
  #cloud-config
  runcmd:
    - 'sed -i "1s|^|HOME=/home/ubuntu\n|" /etc/environment'
    - 'curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -'
    - 'sudo apt install -y python3 python-is-python3 nodejs golang'
```
This script:

- Initializes the `HOME` variable for login shells

- Installs the required language runtimes and tooling

- Prepares the VM to run GitHub Actions step definitions reliably

:::note Minimum Delegate Version

To use GitHub Actions step types in Harness CI, your Harness Delegate must be version 863 or later.

:::

Check out [user-data-example](/docs/continuous-integration/use-ci/set-up-build-infrastructure/vm-build-infrastructure/set-up-an-aws-vm-build-infrastructure#user-data-example) for details.

### Prerequisites for local runner

Starting with **v0.1.19**, local runners support **Bitrise** and **GitHub Action steps**.

To use this feature, make sure:

- You're using **runner version v0.1.19 or later**.
- The **feature flag** `CI_ENABLE_PLUGIN_OUTPUT_SECRETS` is **enabled**.
- The machine has **access to github.com**, since the runner downloads additional binaries during execution.

## Troubleshooting GitHub Actions in Harness CI

Go to the [CI Knowledge Base](/kb/continuous-integration/continuous-integration-faqs) for questions and issue related to plugins and integrations, including GitHub Action steps. For example:

* [Can't connect to Docker daemon](/kb/continuous-integration/continuous-integration-faqs/#github-action-step-cant-connect-to-docker-daemon)
* [Not a git repository (or any of the parent directories)](/kb/continuous-integration/continuous-integration-faqs/#github-action-step-fails-with-not-a-git-repository-or-any-of-the-parent-directories)
* [PATH variable overwritten in parallel GitHub Action steps](/kb/continuous-integration/continuous-integration-faqs/#why-is-the-path-variable-overwritten-in-parallel-github-actions-steps)

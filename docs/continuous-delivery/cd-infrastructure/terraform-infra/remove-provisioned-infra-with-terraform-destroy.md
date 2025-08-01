---
title: Remove Infra with the Terraform Destroy step
description: Remove any Terraform provisioned infrastructure.
sidebar_position: 6
helpdocs_topic_id: j75xc704c8
helpdocs_category_id: jcu7twh2t6
helpdocs_is_private: false
helpdocs_is_published: true
---

This topic describes how to add a Terraform Destroy step to remove any provisioned infrastructure, just like running the `terraform destroy` command. See [destroy](https://www.terraform.io/docs/commands/destroy.html) from Terraform.

The **Terraform Destroy** step is independent of any other Terraform provisioning steps. It's not restricted to removing the infrastructure deployed in its stage. It can remove any infrastructure you've provisioned using Harness.

## Before You Begin

* [Terraform Provisioning with Harness](terraform-provisioning-with-harness)
* [Provision Target Deployment Infra Dynamically with Terraform](/docs/continuous-delivery/cd-infrastructure/terraform-infra/provision-infra-dynamically-with-terraform)
* [Provision with the Terraform Apply Step](run-a-terraform-plan-with-the-terraform-apply-step)

## Important: Install Terraform on Delegates

Terraform must be installed on the Delegate to use a Harness Terraform Provisioner. You can install Terraform manually or use the `INIT_SCRIPT` environment variable in the Delegate YAML.

See [Build custom delegate images with third-party tools](/docs/platform/delegates/install-delegates/build-custom-delegate-images-with-third-party-tools).


```bash
# Install TF  
curl -O -L  https://releases.hashicorp.com/terraform/0.12.25/terraform_0.12.25_linux_amd64.zip  
unzip terraform_0.12.25_linux_amd64.zip  
mv ./terraform /usr/bin/  
# Check TF install  
terraform --version
```
## Review: What Gets Destroyed?

When you add Terraform Plan and Apply steps, you specify the Terraform script that Harness will use for provisioning. You add a **Provisioner Identifier** to each step to identify the provisioning.

![](./static/remove-provisioned-infra-with-terraform-destroy-00.png)

When you destroy the provisioned infrastructure, you specify the same **Provisioner Identifier** in the Terraform Destroy step. The Provisioner Identifier enables Harness to locate the same Terraform script used for provisioning.

![](./static/remove-provisioned-infra-with-terraform-destroy-01.png)

### Viewing Destroy Plan Logs Without Export

To review what will be destroyed before executing a Terraform Destroy step, you can configure your pipeline with the following steps:

1. **Add a Terraform Plan Step**:
   - Configure the plan step with the `destroy` command.
   - Fetch the configuration from a specific commit or branch in your repository.
   - This allows you to view the destroy plan logs directly within the Harness UI.

2. **Add an Approval Step**:
   - Include an approval step after the Terraform Plan step to allow teams to review the destroy plan logs before proceeding with execution.

3. **Add a Terraform Destroy Step**:
   - Configure the destroy step with the `inline` command.
   - Use the same commit or branch configuration as the Terraform Plan step.
   - Execute the destroy step once the plan has been reviewed and approved.

The destroy step behaves similarly to the apply step but is specifically designed for removing provisioned infrastructure.

## Step 1: Add the Terraform Destroy Step

You can add the Terraform Destroy step in the following places:

* The **Execution** steps of a stage.
* The steps of an **Infrastructure**'s **Dynamic Provisioning** section.
* The **Rollback** steps of a stage's **Execution** or **Infrastructure** using **Dynamic Provisioning**.

In **Name**, enter a name for the step. You can use the name to reference the Terraform Destroy settings.

## Step 2: Configuration Type

There are three options:

* **Inline:** Removes the provisioned resources you identify using **Provisioner Identifier** and other settings.
* **Inherit from Plan:** Removes the resources defined in the Harness **Terraform Plan** step that you identify using **Provisioner Identifier**. Similar to `terraform plan -destroy`.
* **Inherit from Apply:** Removes the resources defined in the Harness Terraform Apply step that you identify using **Provisioner Identifier**. Similar to `terraform destroy`.

## Step 3: Reference the Provisioner Identifier

In **Provisioner Identifier**, enter the same Provisioner Identifier you used in the Terraform Apply step that provisioning the resources you want to destroy.

Click **Apply Changes**.

The Terraform Destroy step is added.

## Command line options

:::note

Currently, the Terraform command line option is behind the feature flag `CDS_TERRAFORM_CLI_OPTIONS_NG`. Contact [Harness Support](mailto:support@harness.io) to enable the feature.

:::

This setting allows you to set the Terraform CLI options for Terraform commands depending on the Terraform step type. For example: `-lock=false`, `-lock-timeout=0s`.

![](./static/run-a-terraform-plan-with-the-terraform-apply-step-18.png)

## Skip Terraform Refresh

Terraform refresh command won't be running when this setting is selected.

## Create remote workspace with prefix

:::note
This setting is only available when the Configuration Type is **Inline**.

This option is available only on delegate version `86400` or later.
:::

Enable this option to automatically create or select a remote workspace when using a workspace **prefix** in your backend configuration.

When using a [Terraform remote backend](https://developer.hashicorp.com/terraform/language/backend/remote) with a prefix, Terraform does **not** create the workspace automatically if it doesn’t exist. This can lead to pipeline failures with errors like:

`Error: Currently selected workspace "my-app-dev" does not exist`

When this option is enabled:

- If the remote workspace does **not** exist, Harness creates it during execution.
- If the remote workspace **already exists**, Harness exports it to the `TF_WORKSPACE` environment variable so that Terraform uses it.
- If both the step configuration and environment variable specify a workspace, the **step configuration takes precedence**.

:::info
To enable automatic workspace selection when a workspace is configured in the step settings, this flag **must** be enabled.

If you prefer not to use this flag, you can manually configure the workspace using the `TF_WORKSPACE` environment variable.
:::

<details>
<summary>This is how the YAML would look like</summary>

```yaml
- step:
    type: TerraformDestroy
    name: Terraform Destroy
    identifier: Terraform_Destroy
    spec:
      provisionerIdentifier: test
      configuration:
        type: Inline
        createRemoteWorkspaceWithPrefix: true
        spec:
          configFiles: {}
```
</details>

## Working directory cleanup
Each Terraform step runs in a specific working directory on the delegate.

The Terraform working directory is located at `/opt/harness-delegate/./terraform-working-dir/`.

To that directory path, Harness adds additional directories that are named after the organization, account, project, and provisionerId (from the step) such that the final working directory is `/opt/harness-delegate/./terraform-working-dir/org-name/account-name/project-name/provisionerId/`.

In this final working directory, Harness stores the Terraform configuration and all fetched files such as var-files and backend-config.

Once the Terraform step execution is complete, Harness cleans up the main working directory `/opt/harness-delegate/./terraform-working-dir/`.

If you generate any local resources on the delegate in the directory where Terraform configurations are located, those resources are also removed. If you need those resources, make sure to generate them outside the Terraform working directory.

#### Terraform variable files

You can specify Terraform variables inline and fetch remote variable files during run time. For more information, go to [Specify Terraform variables](/docs/continuous-delivery/cd-infrastructure/terraform-infra/optional-tf-var-files).

## See Also

* [Rollback Provisioned Infra with the Terraform Rollback Step](rollback-provisioned-infra-with-the-terraform-rollback-step)


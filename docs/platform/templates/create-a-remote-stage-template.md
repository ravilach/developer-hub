---
title: Create a remote stage template
description: This topic explains how to add a remote Stage template in Harness.
sidebar_position: 5
helpdocs_topic_id: e4xthq6sx0
helpdocs_category_id: m8tm1mgn2g
helpdocs_is_private: false
helpdocs_is_published: true
---

Harness enables you to add templates to create re-usable logic and Harness entities (like steps, stages, and pipelines) in your pipelines. Templates enhance developer productivity, reduce onboarding time, and enforce standardization across the teams that use Harness. You can use stage and step templates in pipeline templates, or use stage and step templates while creating pipelines.

When you create a template, you can save it in Harness (**Inline**) or in a Git repository (**Remote**).

![](./static/create-a-remote-stage-template-87.png)

Templates stored in Git repos are referred to as *remote templates*. This topic demonstrates how to create, configure, and use remote templates by creating a remote [stage template](./add-a-stage-template.md).

This topic assumes you have an understanding of [Harness' key concepts](/docs/platform/get-started/key-concepts) and [Harness templates](template.md).

You can view all your templates in Harness, under **Templates**, based on their scope. The templates list is also referred to as the *Template Library*.

### Permissions

You must have **Create/Edit** and **Access** permissions for templates to create a remote stage template.

### Use a template in a pipeline

Harness resolves the repositories when your pipeline starts up. After that, the same resource is used during the execution of the pipeline. When you use the templates in your pipelines, once the templates are fully expanded, the final pipeline runs as if it were defined entirely in the source repo.

You can have one of the following scenarios when using a template in your pipeline:

* The remote stage template and the pipeline exist in the same Git repo.
* The remote stage template and the pipeline exist in different Git repos.
* The pipeline exists in Harness and the stage template exists in a Git repo.

Let's see how you can use a template in each of these situations.

#### Remote stage template and the pipeline exist in the same Git repo

To use the template in your pipeline if your remote stage template and pipeline are both present in the same Git repository, make sure your pipeline and template are both present in the same branch.

#### Remote stage template and the pipeline exist in different Git repos

To use the template in your pipeline if your remote stage template and pipeline are present in different Git repositories, make sure your template is present in the default branch of the specific repo.

#### Pipeline exists in Harness and the stage template exists in a Git repo

To use the template in your inline pipeline, make sure your template is present in the default branch of your Git repository.

### Step 1: Create a remote stage template

You can create a stage template from your account, org, or project. This topic explains the steps to create a stage template from the project scope.

To create a remote stage template from the project scope, do the following:

1. In your Harness, go to your project.
2. Select **Project Settings**, then, under **Project-level resources**, select **Templates**.
3. Select **+ New Template**, and then select **Stage**. The **Create New Stage Template** settings open.
4. In **Name**, enter a name for the template.
5. (Optional) Select the pencil icon to enter a **Description**.
6. (Optional) Select the pencil icon to add **Tags**.
7. In **Version Label**, enter the version of the stage, for example, `v1`. Versioning a template enables you to create a new template without modifying the existing one. For more information, go to [Versioning](template.md).
8. Under **How do you want to set up your template?**, select **Remote**.
9. In **Git Connector**, select or create a Git connector to the repo for your project. For steps, go to [Code Repo Connectors](/docs/category/code-repo-connectors).

   :::info

   The Git connector must use the **Enable API access** option and **Username and Token** authentication.

   Harness requires the token for API access.

   Generate the token in your account on the Git provider and add it to Harness as a Secret. Next, use the token in the credentials for the Git Connector.

   ![](./static/create-a-remote-pipeline-template-24.png)

   For GitHub, the token must have the following scopes:

   ![](./static/create-a-remote-pipeline-template-25.png)

   :::

10. In **Repository**, select your repository. If your repository isn't listed, enter its name. Create the repository in Git before entering it in Select Repository. Harness does not create the repository for you.
11. In **Git Branch**, select your branch. If your branch isn't listed, enter its name since only a select few branches are filled here. Create the branch in your repository before entering it in Git Branch. Harness does not create the branch for you.
12. Harness auto-populates the **YAML Path**. You can change this path and the file name.
13. Select **Start**.

   Your Stage Template is created and the **Select Stage Type** settings open.

   ![](./static/create-a-remote-stage-template-90.png)

### Step 2: Add the stage parameters

This example uses the Deploy stage. The Deploy stage type is a CD stage that enables you to deploy any service to your target environment.

Other options include:

   - **Build:** Use CI to build, test, and push artifacts to repositories.
   - **Approval:** Manual and Jira approval stages.
   - **Feature Flag:** Enable or disable functionality remotely without redeploying code.
   - **Custom Stage:** Set up a stage configurable to your needs.

To add stage parameters, do the following:

1. Select **Deploy** in the **Select Stage Type** settings.

   The **About your Stage** settings open.

   ![](./static/create-a-remote-stage-template-91.png)

2. Select the type of deployment this stage must perform.
   A stage can deploy services and other workloads. The default selection is **Service**.
3. Select **Set Up Stage**. The Template Studio page opens.
4. In **Select Service**, select an existing service or add a new one.

   ![](./static/create-a-remote-stage-template-92.png)

5. Select **Continue**.
6. In **Specify Environment**, select an existing environment or add a new one.
7. In **Specify Infrastructure**, select an existing infrastructure or add a new one.
8. Select **Continue**.
9. In **Execution Strategies**, select **Rolling**, and then select **Use Strategy**. In **Execution**, you can see the **Rollout Deployment** step is added automatically.
10. Select **Save**.

   The **Save Template to Git** settings open.

   ![](./static/create-a-remote-stage-template-93.png)

11. In **Select Branch to Commit**, you can select one of the following:

   - **Commit to an existing branch:** You can start a pull request if you like.

   - **Commit to a new branch:** Enter the new branch name. You can start a pull request if you like.

12. Select **Save**.

   Your remote stage template is saved to the repo branch.

   ![](./static/create-a-remote-stage-template-94.png)

13. Click the YAML file to see the YAML for the stage template.
14. Edit the YAML. For example, change the name of the template.
15. Commit your changes to Git.
16. Return to Harness and refresh the page.

   A **Template Updated** message opens.

   ![](./static/create-a-remote-stage-template-95.png)

### Next steps

* [Use a template](use-a-template.md)

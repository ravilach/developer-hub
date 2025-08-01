---
title: Harness Concepts
description: This topic describes how to optimize cloud costs using asset governance.
# sidebar_position: 2
---


# Harness Concepts: Rules, Rule Sets, Enforcements and Evaluations to optimise cloud costs

## Rules

Rules help you set up Asset Governance for your cloud provider. A Rule is essentially a small file with a set of logic that you can run on your cloud infrastructure. For example, there might be a scenario in which you want to delete all GCP snapshots older than 14 days. In such a case, we write and run a rule which does this for us.

Ideally, rules include policy, resource, filters, and actions.

- A **policy** is defined in YAML format and consists of filters and actions that are applied to a specific type of cloud resource.

- A **resource** is a type of cloud resource or service on which the rule will be run with the actions and filters, such as GCP instance, snapshot, bucket, etc.

- A **filter**, as the name suggests, is a criteria used to narrow down the results based on the attributes. These attributes can include anything such as tags, metadata, or any other resource property provided by you. When the filter is applied, only those resources that match the criteria specified in the filter are given as a result.

- **Actions** are operations performed on the filtered resources. Actions include things like deleting unattached cloud routers, listing idle SQL instances, or deleting GCP snapshots.

<DocImage path={require('../static/anatomy_of_a_rule.png')} width="70%" height="70%" title="Click to view full size image" />

So essentially, **a Rule is a file that includes logic defined by a policy that performs certain actions on the resource based on the filters provided by the user**. Rules can include multiple policies, and policies include resource, filters and actions. 

<DocImage path={require('../static/rule_example_gcp.png')} width="80%" height="80%" title="Click to view full size image" />

:::important note
Number of Rules per Account[Custom + OOTB] can be 300.
:::

### Create a new Rule

1. In **Harness**, go to **Cloud Costs**.
2. Select **Asset Governance**.
3. Select **Rules**.
4. Select **+ New Rule**. 


  <DocImage path={require('../static/asset-governance-rule-creation.png')} width="90%" height="90%" title="Click to view full size image" />

5. Enter a name for the rule.
6. Select the cloud provider. Also, enter Savings prediction in percentage (optional). This custom percentage will be honored during savings computation.
7. Optionally, enter a description of the rule.
8. Select **Apply**.
9. Enter the YAML policy in the rule editor.
10. Select **Save**. If the policy is invalid, an error message is displayed.

10. Select the **Project** from the dropdown list in the Test Terminal.
11. Select **Dry Run** to view the instances or services that will be acted upon when you enforce the rule.
12. After evaluating the output, select **Run Once** to execute the rule. 

  <DocImage path={require('../static/rule-window-gcp.png')} width="90%" height="90%" title="Click to view full size image" />

:::info
Harness provides some out-of-the-box policies for gcp.bucket, gcp.image, gcp.instance, gcp.router, etc. that you can enforce. These policies can only be cloned, not edited.
:::

### Update a Rule

You can view the Rules on the Asset Governance Rules page. You can click on Edit button from the vertical ellipsis menu (⋮) to edit a Rule or simply click on the Rule to open Rule editor and then make changes.

### Delete a Rule

To delete a **Rule Set**, click **Delete** from the vertical ellipsis menu (⋮).

  <DocImage path={require('../static/update-and-delete-gcp.png')} width="90%" height="90%" title="Click to view full size image" />

:::info 
We now have Terraform support for managing Governance Rules. Please see [here](https://registry.terraform.io/providers/harness/harness/latest/docs/resources/governance_rule) for more details.
:::


## Rule Sets

As mentioned earlier, a Rule can have multiple policies. However, when there are multiple rules with multiple policies, it can become hard to manage them all together. This is where **Rule Sets** can be used. Rule sets serve as logical bindings on top of individual rules that help you organize and manage rules. By organizing rules into sets, organizations improve accessibility and simplify maintenance, as enforcements can be made against the entire rule set rather than individual rules.

  <DocImage path={require('../static/rule-set-gcp.png')} width="90%" height="90%" title="Click to view full size image" />
  

### Create a new Rule Set

To create a Rule Set, perform the following steps:

1. In **Harness**, go to **Cloud Costs**.
2. Select **Asset Governance**.
3. Select **Rules**.
4. Select the **Rule Sets** tab.
5. Select **+ New Rule Set**.
6. Enter a name for the rule set.
7. Optionally, enter a description of the rule set.
8. Select the cloud provider.
9. Select the rules that you want to add to the rule set. 
10. Select **Create Rule Set**. 
The rule set is created successfully.

  <DocImage path={require('../static/create-new-rule-set-gcp.png')} width="90%" height="90%" title="Click to view full size image" />


  <!-- <DocImage path={require('../static/view-rule-set-gcp.png')} width="90%" height="90%" title="Click to view full size image" /> -->

11. You can view the rule set on the **Asset Governance Rules** page. Expand the rule set to view the individual rules in the rule set.
12. Select **Enforce Rule Set** in the Enforcements column to enforce this rule set.any

### Update a Rule Set

You can view the Rule Set on the Asset Governance Rules page. Expand the rule set to view the individual rules in the rule set. You can click on Edit button from the vertical ellipsis menu (⋮) to edit the rule set.

### Delete a Rule Set
To delete a Rule Set, click on Delete from the vertical ellipsis menu (⋮).

 <DocImage path={require('../static/update-and-delete-ruleset-gcp.png')} width="90%" height="90%" title="Click to view full size image" />

 :::info 
We now have Terraform support for managing Governance RuleSets. Please see [here](https://registry.terraform.io/providers/harness/harness/latest/docs/resources/governance_rule_set) for more details.
:::


## Enforcements

Enforcements enable you to enforce a certain set of Rules or Rule Sets (also known as governance guardrails) against a specific set of targets (accounts, projects, or subscriptions) to run periodically. Sometimes, we need rules to run periodically, such as every day, week, or month. However, running these rules manually every day or week at a specified time creates extra overhead and is a slow process prone to manual errors. To solve this, you can use **Enforcements** that allow you to set up a timely schedule and choose the day, time, and frequency for their rules or rule sets.

For example, a user can create an Enforcement to schedule the deletion of all GCP snapshots older than 14 days. This Enforcement will run on the **days specified by the user**, at the **specified time**, and with the **specified frequency (hourly, daily, monthly**). For instance, you could set it to run daily at 2:00 AM to ensure that any snapshots meeting the criteria are removed. Alternatively, you might choose to run it hourly during peak usage times, or monthly for less critical cleanup tasks. 

While setting up a new Enforcement, you can select the following:
- **Cloud provider**: Currently we support AWS, Azure and GCP.
- **Rules/ Rule Sets**: You can select the Rules or Rule Sets that your Enforcement will consist of.
- **Target Projects**: The target projects that you will be running the Enforcements on.
- **Frequency**: The frequency for running the Enforcement. Currently, it can be set for hourly, daily or weekly.
- **Time**: After setting the frequency, you can choose the time at which it runs.
- **Dry Run Mode**: You can choose to run your Enforcement in Dry Run mode which will generate a simulation of the rule enforcement instead of performing actions.

  <DocImage path={require('../static/enforcements-gcp.png')} width="95%" height="95%" title="Click to view full size image" />

:::important note
- Number of Targets in an Enforcement can be upto 6000.
- Number of Rule Sets in Enforcement can be upto 30.
:::

### Create a new Enforcement
To create an Enforcement, perform the following steps:

1. In your **Harness** application, go to **Cloud Costs**.
2. Select **Asset Governance**.
3. Select **Enforcements**.
4. Select **+ New Enforcement**.
5. Enter a name for the Enforcement.
6. Optionally, enter a description of the Enforcement.
7. Select the cloud provider.
8. Select the Rules or Rule Sets that you want to enforce. You can use the **Search** box if you have multiple rules and are looking to enforce a particular rule or rule set.
9. Select **Continue**. 
    <DocImage path={require('../static/create-enforcement-gcp.png')} width="90%" height="90%" title="Click to view full size image" />
    <DocImage path={require('../static/rules-gcp-selection.png')} width="90%" height="90%" title="Click to view full size image" />

10. Select the target accounts. You could select multiple accounts.
11. Set the frequency from **Hourly**, **Daily**, or **Weekly** options. In case you select Daily or Weekly, specify the day, time, and time zone to run the rule on schedule.
12. Toggle the **Dry Run** mode if you do not want to take action immediately.
13. Select **Finish**. 

    <DocImage path={require('../static/set-up-schedule-gcp.png')} width="90%" height="90%" title="Click to view full size image" />

After setting up the schedule, you can view the Enforcement on the **Enforcements** page. 

<DocImage path={require('../static/enforcements-list-gcp.png')} width="90%" height="90%" title="Click to view full size image" />

Furthermore, you can disable the Enforcement at any time using the toggle button in the **Status** column. If you want to turn off the dry-run mode, select **Edit** from the vertical ellipsis menu (⋮) then go to "Target And Schedule", use slider to turn off "Enforce Rule(s) in Dry Run mode" and click on Finish.

### Update an Enforcement

You can view any Enforcements on Rule Enforcements page. Click on the enforcement to view details such as the rules and target projects included in the enforcement. For updating, you can use the "Edit" button from the vertical ellipsis menu (⋮) to update the enforcements as per your convenience.

### Delete an Enforcement

To delete an enforcement, simply click on “Delete” from the vertical ellipsis menu (⋮).

<DocImage path={require('../static/update-and-delete-enforcement-gcp.png')} width="90%" height="90%" title="Click to view full size image" />

:::info 
We now have Terraform support for managing Governance Enforcements. Please see [here](https://registry.terraform.io/providers/harness/harness/latest/docs/resources/governance_rule_enforcement) for more details.
:::

## Evaluations

Evaluations include all the data about enforcements run (both RUN ONCE from rule editor and from Enforcement). The Evaluations window also shows you the total cost impact with each Enforcement i.e. the costs or spendings associated with each Evaluation along with the last time that Rule/Rule set was enforced. With Evaluations, you can view and audit all the Enforcements that ran in the past.


Harness CCM also supports multiple statuses for evaluations. Currently CCM supports three statuses for an evaluation:

- Success: If the evaluation is completed without any errors, the status of the evaluation is shown as "Successful".
- Failure:  If the evaluation is not completed and has errors, the status of the evaluation is shown as "Failure".
- Partial Success: If the evaluation is successful without any Harness errors but Cloud Custodian has additional logs and/or in case of multi-policy evaluations, if the evaluation was successful only for a subset of resources, the status is shown as "Partial Success".


:::info
Each enforcement can now have up to **10,000 evaluations**. The cap is calculated as `Rules × Accounts × Regions` and replaces the earlier individual limits on rules, rule sets, accounts, or regions.
:::

<DocImage path={require('../static/evaluation-gcp-one.png')} width="90%" height="90%" title="Click to view full size image" />

### View Evaluations

1. In your **Harness** application, go to **Cloud Costs**.
2. Select **Asset Governance**.
3. Select **Evaluations**.
4. You can see all the Evaluations of Rules listed on  the window.
4. Select the rule for which you want to view the Evaluation details. The target project, identified resources and evaluation logs are displayed.

<DocImage path={require('../static/evaluation-gcp.png')} width="90%" height="90%" title="Click to view full size image" />


### Filters in Evaluations List Page

You can create filters to view selected rules:

1. Select the filter icon.
2. Enter a name.
3. Select who can edit and view the filter.
4. Select one or more of the following criteria to filter the results:
    * Rules
    * Rule Sets
    * Enforcements
    * Minimum Cost Impact ($)
    * Cloud Provider
    * GCP Filters
      - GCP Project

5. Select **Apply**.

  <DocImage path={require('../static/filter-evaluation-rules-gcp.png')} width="70%" height="70%" title="Click to view full size image" />

:::important note
Number of evaluations for which we can compute cost impact is 1,50,000/ Day.
:::


## Testing Terminal

In the rule editor, a test terminal is present for users to see the output in the terminal itself upon evaluating a Rule. This is done to ensure that users can run the rules and try accordingly to check how the output would look on the selected project. After providing the relevant input, the users can select either to dry run the rule first, run it once or enforce the rule. 

<DocImage path={require('../static/outputTerminalGCP.png')} width="90%" height="90%" title="Click to view full size image" />

After this, the resources identified are shown on the output terminal in JSON format. With this output, users can perform different actions like searching, downloading, filtering, sorting and picking. 

<DocImage path={require('../static/Ouputscreen.png')} width="90%" height="90%" title="Click to view full size image" />

#### Searching in Output Terminal
After the output is rendered, users can search for any keywords in the output terminal. This streamlines troubleshooting and debugging processes and helps to efficiently locate required information amidst large volumes of output data. 

#### Zip Downloads
The JSON output can be downloaded in either JSON format or a CSV format(original or flatted) into a single zip archive.

#### JSON Filtering
The output can be filtered based on the keys present in the JSON output. Currently, filtering on the basis of `==`, `!=`, `<`, `<=`, `>`, `>=` is supported in terms of numeric key values and if the key's value is a string, string matching using `LIKE` is supported. This feature enables users to extract specific fields, filter out irrelevant data, and perform relevant queries on JSON datasets.

#### Sorting
The output can be sorted based on the keys present in the JSON output in either an `ASCENDING` or `DESCENDING` manner.

#### Pick
If output needs to be streamlined and only a few keys-value pairs are required, 'Pick' functionality can be used. Using this, users can pick only the required keys and see the data associated with them in the output.


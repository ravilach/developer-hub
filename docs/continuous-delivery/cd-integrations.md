---
title: What's supported
description: Supported CD features and integrations. 
sidebar_position: 1
---

This topic lists the supported CD features and integrations you can use in Harness for deploying and verifying your apps.

For a comprehensive list that includes all Harness modules, go to [Supported platforms and technologies](/docs/platform/platform-whats-supported.md).

import PartialExample from '/docs/continuous-delivery/shared/cd-integrations-supported.md';

<PartialExample name="integrations" />

## Active CD Feature flags

Some Harness CD features are released behind feature flags to get feedback from specific customers before releasing the features to the general audience. Feature development statuses are categorized as [Beta, GA, or Limited GA](/docs/platform/get-started/release-status).

The following table describes active feature flags relevant to Harness CD.

To enable a feature flag in your Harness account, contact [Harness Support](mailto:support@harness.io).

| Flag | Description |
| --- | --- |
| `PIPE_ENABLE_GITHUB_ENTERPRISE_PROVIDER_FLOW` | Enables users to integrate their GitHub Enterprise instance using Harness’s OAuth provider configuration, instead of legacy token-based connectors. Harness's built-in Secret Manager is not supported with this provider flow, you must use a custom Secret Manager accessible to your delegate. **This feature is in Limited GA.** |
| `PIPE_SUPPORT_MULTIPLE_TIMEZONES_IN_CRON_TRIGGERS` | Enables users to select timezones for [Cron triggers](/docs/platform/triggers/schedule-pipelines-using-cron-triggers) using IANA Time Zone names, providing more control over when pipelines are triggered. **This feature is in Limited GA.** |
| `CDS_UI_ENABLE_DISALLOWED_USER_EMAILS_IN_APPROVAL_STEP` | Enables users to block specific users from approving steps using [Disallowed User Emails](/docs/platform/approvals/adding-harness-approval-stages#disallowed-user-emails). **This feature is in Limited GA.** |
| `CDS_MANIFEST_HASH_WITH_DECLARATIVE_ROLLBACK` | Enables users to ensure Kubernetes workloads are redeployed when referenced ConfigMaps or Secrets are updated, even if the deployment spec itself remains unchanged. This is achieved by hashing manifest content under declarative rollback. **This feature is in Limited GA.** |
| `PIPE_PROJECT_LEVEL_EXECUTION_CONCURRENCY` | Enables users to configure Project-Level Pipeline Execution Concurrency by splitting the account-wide concurrency limit into High-Priority and Low-Priority partitions to reserve execution slots for critical projects. [Learn more](/docs/platform/pipelines/pipeline-settings/#project-level-pipeline-execution-concurrency). **This feature is in Limited GA.** |
| `PIPE_EXECUTION_ID_FILTER` | Enables users to filter pipeline executions by build ID, making it easier to quickly locate specific runs without scrolling through large execution lists. **This feature is in Limited GA.** |
| `CDS_REFRESH_IN_JIRA_SERVICENOW_APPROVALS` | Enables users to manually trigger a status refresh for **Jira**, **ServiceNow**, and **Custom Approval** steps using the **Refresh** button in the UI. This enhancement supports on-demand evaluation of approval conditions, reducing reliance on scheduled polling intervals. **This feature is in Limited GA.**|
| `PIPE_ENABLE_QUEUED_BASED_CUSTOM_TRIGGERS` | Harness now supports custom webhook trigger execution via the **Queue Service**, improving reliability and scalability. This ensures webhook triggers are processed efficiently even under high load, without one customer's activity impacting others. **This feature is in Limited GA.**|
| `CDS_ENABLE_STEADY_STATE_CHECK_WITHOUT_MANAGED_WORKLOADS` | Enables users to run **Service PreHooks** for Kubernetes **CronJob** workloads during the **Wait for Steady State** phase. Previously, PreHooks did not trigger for CronJobs. This feature ensures PreHooks are executed consistently across workload types. **This feature is in Limited GA.** |
| `CDS_OVERRIDES_DISABLE_ENV_API_UPDATES` | Enables users to view environment variable references and YAML overrides more accurately in the UI. Previously, secrets continued to appear as referenced in an environment even after removal. This fix improves clarity in the environment configuration view.  **This feature is in Limited GA.**|
| `CDS_K8S_EKS_REFRESH_EXEC_AUTH_TOKEN` | Enables users to automatically refresh expired A**WS EKS authentication tokens** (ExecCredential) during long-running API calls, preventing failures from the default 15-minute TTL. **This feature is in Limited GA.**|
| `CDS_SPOT_TRAFFIC_SHIFT` | Enables users to perform weighted traffic shifting for Spot Elastigroup deployments via the new **Elastigroup Blue Green Traffic Shift step**, supporting gradual rollout strategies for services with low task counts. **This feature is in Limited GA.**|
| `PIPE_STAGE_NOTIFICATION_ENV_SVC` | Enables users to include the service name and environment in the subject line of EMAIL notifications, making them searchable and context-rich. **This feature is in Limited GA.** |
| `CDS_TEXTAREA_FOR_OVERRIDE_VARIABLES` | Harness now supports viewing full variable values in the Override tab. Users can see and edit entire override values without truncation. **This feature is in Limited GA.** |
| `CDS_TF_POLICY_EVALUATION` | Harness now fetches Terraform Enterprise OPA policy evaluation results and fails the pipeline stage when a policy evaluation fails, ensuring pipelines correctly enforce OPA policy compliance. **This feature is in Limited GA.** |
| `CDS_AWS_LAMBDA_ECS_TAG_SUPPORT` | Users can now **create, update, and delete tags** in **AWS Lambda** and **AWS ECS deployments**, ensuring that all specified tags in the YAML manifest are correctly propagated during the deployment process and accurately reflected in the AWS Console. **This feature is in Limited GA.** |
| `CDS_SERVICE_DASHBOARD_SIMPLIFICATION` | Improves Service Dashboard load time by optimizing API calls and relocating certain data to enhance performance. The service dashboard graph has been moved to the Analytics tab. Users can switch between the **Service** and **Analytics** tabs at the top right of the **Service Dashboard** page. **This feature is in Limited GA.** |
| `PIPE_CUSTOM_NOTIFICATION_TEMPLATES`                          | Enables customized notifications for all types of Pipeline Notifications and for Webhook-based Centralized Notifications. **This feature is in Limited GA.** |
| `CDS_SUPPORT_HTTP_HEADER_HTTP_STEP`                           | Allows capturing HTTP response headers, including cookies, as output variables in the HTTP step for use in downstream steps. **This feature is in Limited GA.** |
| `CDS_SUPPORT_TF_CLOUD_PLAN_REFRESH_TYPE`                      | Auto-approves Terraform Cloud runs of type **Refresh** when executed through Harness, streamlining plan execution. **This feature is in Limited GA.** |
| `CDS_SCM_FIX_FOLDER_PATH`                                     | Fixes file copy issues in SCM integrations where a leading `/` in the source path caused only a single file to be copied instead of the entire directory. **This feature is in Limited GA.** |
| `CDS_AWS_CONNECTOR_REF_CDK`                                   | Expands the OIDC payload for GCS Cache steps to include additional claims, enabling fine-grained access control using custom claim attributes. **This feature is in Limited GA.** |
| `CDS_AWS_LAMBDA_ROLLBACK_V2`                                  | Allows deployment of AWS Lambda artifacts larger than 50 MB from S3 and supports version rollback using aliases. **This feature is in Limited GA.** |
| `CI_ENABLE_MULTILINE_OUTPUTS_SECRETS`                         | Enables support for capturing multiline output variables from Container steps in CD pipelines, ensuring proper population and visibility in the Output tab. **This feature is in Limited GA.**                                                     |
| `CDS_ECS_TRAFFIC_SHIFT`                                       | Introduces the ECS Traffic Shifting step to support weighted traffic shifting and Spot deployments, enabling gradual rollout strategies for ECS services with low task counts. **This feature is in Limited GA.**                                   |
| `CDS_ENABLE_VALIDATION_FOR_NAMESPACE_OVERRIDES_TO_MATCH_WITH_INFRA_NAMESPACE` | Enforces namespace consistency in Kubernetes and Helm deployments by preventing users from overriding the infrastructure-defined namespace using custom CLI flags like `--namespace`. **This feature is in Limited GA.**             |
| `CDS_CONFIG_MAPS_AND_SECRETS_AS_VOLUME`                       | Supports mounting ConfigMaps and Kubernetes Secrets as volumes in CD Container steps, allowing users to inject configuration and credentials without building custom images. **This feature is in Limited GA.**                                     |
| `CDS_SKIP_HELM_INSTALL`                                       | Enables Helm deployments with CRDs by supporting `helm upgrade --install`, allowing resources that already exist outside the namespace to be deployed seamlessly. **This feature is in Limited GA.**                                                |
| `PIPE_USE_ORIGINAL_YAML_FOR_EXECUTION`                        | Enables re-running pipelines with the original pipeline definition and inputs to ensure accurate reproduction and debugging of historical executions. **This feature is in Limited GA.**                                                            |
| `PIPE_ADD_ORIGINAL_FAILED_CHILDREN_TO_OUTPUT`                 | Fixes rollback handling for user-initiated failures and approval rejections by ensuring rollback strategies execute as expected. **This feature is in Limited GA.**                                                                                  |
| CDS_TF_PROJECTS_SUPPORT | Enables users to select the Project that includes the workspace to run inside the **Terraform Cloud Run Step**, allowing better organization and precise workspace targeting. **This feature is in Limited GA** |
| CDS_CUSTOM_MAX_CONCURRENCY | Enables users to configure a custom `maxConcurrency` value in multi-deployment stages in Harness, allowing greater control over parallelism in deployments. **This feature is in Limited GA**|
| CDS_GCP_OIDC_CONNECTOR_CROSS_PROJECT_ACCESS | Enables users to leverage cross-project access with the GCP connector in both Kubernetes and native Helm environments. **This feature is in Limited GA**|
| CDS_K8S_DIFF_STEP_SUPPORT | Enables users to add a native **K8s diff** step in CD pipelines, allowing them to preview changes before deployment. **This feature is in Limited GA**|
| CDS_MANIFEST_CONNECTOR_URL | Enables users to fetch the Service Manifest source (i.e., Connector URL where the manifest is stored) using the expression `<+manifests.MANIFEST_ID.store.connectorUrl>`. **This feature is in Limited GA**|
| CDS_REMOVE_COMMENTS_FROM_VALUES_YAML_WITH_ESCAPE_CHARACTERS | Enables proper handling of special characters in `values.yaml` by removing control characters such as `single (' )`, `double (")`, and `backslash (\)`, preventing pipeline failures. |
| CDS_ENFORCE_GIT_EXPERIENCE | Enables users to enforce the **Git experience for environments, infrastructure, and overrides V2**, ensuring consistency across all components, similar to pipelines, inputs, and templates. **This feature is in Limited GA**|
| CDS_TAS_ARTIFACT_BUNDLE_PRESERVE_PERMISSION_ON_EXTRACTION | Ensures that file permissions inside the `tar.gz` archive are retained when deploying **Artifact Bundles** for **NodeJS apps** to **PCF (Pivotal Cloud Foundry)**, preventing permission issues during application startup. **This feature is in Limited GA**|
| CDS_AZURE_CLI_WEBAPP_DEPLOYMENT | Enables enhanced support for non-standard configurations and Azure CLI-based workflows for Azure Web App deployments. Available with Delegate version `85302` or later. **This feature is in Limited GA**|
| CDS_HELM_DELETE_STEP | Enables a native **Helm Uninstall** step in the Deploy stage to uninstall Helm charts. **This feature is in Limited GA** |
| CDS_ECS_MONITOR_TASK_STATUS | Enables Harness to accurately detect failures in **ECS Rolling Deployments**. **This feature is in Limited GA** |
| PIPE_USE_HARNESS_CODE_FOR_INLINE_ENTITIES | Saves inline entities in the [Harness Code Repository](/docs/code-repository/get-started/onboarding-guide/) by default. **This feature is in Limited GA** |
| PIPE_DYNAMIC_PIPELINES_EXECUTION | Allows users to dynamically execute pipelines by providing pipeline YAML configurations at runtime, without requiring pre-saved configurations in Harness. **This feature is in Limited GA** |
| PIE_USE_OPTIMISED_TEMPLATE_RESOLUTION | Introduces the `storeType` field in YAML templates to distinguish whether a template is stored **Inline** or **Remote**. **This feature is in Limited GA** |
| OPA_IMPORT_FROM_GIT | Enables users to import OPA policies directly from Git. **This feature is in Limited GA** |
| CDS_GITOPS_OPERATOR | Enables integration of the Harness GitOps Agent with the OpenShift Certified Vendor Catalog, allowing seamless use with OpenShift OperatorHub and Red Hat Marketplace. **This feature is in Limited GA** |
| CDS_K8S_CUSTOM_YAML_PARSER | Enables support for Kubernetes sidecar containers as introduced in Kubernetes 1.28. This custom YAML parser addresses compatibility issues with the current Kubernetes Java SDK version 18.0.0, which lacks native support for sidecar configurations. **This feature is in Limited GA** |
| CDS_SKIP_INSTANCES_V2 | Enables users to retry failed deployments on a subset of hosts when using traditional infrastructure. **This feature is in Limited GA** |
| CDS_ASG_SKIP_INSTANCE_TERMINATION | Enables users to track the progress of launching new instances and terminating existing ones in AWS during a rolling deployment using the ASG Steady State Step in Harness. **This feature is in Limited GA**|
| CDS_ECS_BG_VALIDATION_WITH_SAME_TARGET_GROUPS | Enables users with dynamically generated load balancer configurations to successfully validate ECS Blue-Green deployment pipelines, resolving the previous validation failure. **This feature is in Limited GA** |
| CDS_ARTIFACT_DISABLE_VALIDATION | Enables users to bypass primary and sidecar artifact consumption checks in the service of a **Deploy** stage. For more information, go to Harness [Skip Artifact Consumption for the Stage](/docs/continuous-delivery/x-platform-cd-features/services/artifact-sources/#skip-artifact-consumption-for-the-stage). **This feature is in Limited GA**  |
| CDS_CROSS_SCOPED_ENV_GROUPS | Enables users to add environments created at Account and Orgainsation level to Environment Groups. For more information, go to Harness [Cross Scope Environment Groups](https://developer.harness.io/docs/continuous-delivery/x-platform-cd-features/environments/create-environment-groups#cross-scope-environment-groups). **This feature is in Limited GA** |
| CDS_K8S_DETAILED_LOGS | Enables users to view detailed logs of **Wait For Steady State** step in Kubernetes deployments. For more information, go to Harness [Detailed diagnostics for K8s Deployment](https://developer.harness.io/docs/continuous-delivery/deploy-srv-diff-platforms/kubernetes/kubernetes-cd-quickstart#detailed-diagnostics-for-k8s-deployment). **This feature is in Limited GA** |
| CDS_SERVICE_OVERRIDES_2_0_YAML_V2_SUPPORT | Ensures that overrides from environment configuration YAML are ignored when Override V2 is enabled. <b> This feature is in Limited GA. </b> |
| CDS_GOOGLE_CLOUD_RUN | Allows users to deploy artifacts to Google Cloud Run. <b> This feature is in Limited GA. </b> |
| CDS_AZURE_FUNCTION | Allows users to deploy Azure Functions through Harness. <b> This feature is in Limited GA. </b> |
| CDS_SVC_ENV_DASHBOARD_FOR_ACCOUNT_AND_ORG_LEVEL | Allows users to do Post-Deployment Rollback for services at both the Account and Organisation levels. <b> This feature is in Limited GA. </b> |
| CDS_SERVICE_ACCOUNT_SUPPORT_IN_HARNESS_APPROVAL | Enables users to approve Harness approval requests using the Approval API with a Service Account token. To learn more, refer [Using the Approvals API with Service Account Authentication](/docs/platform/approvals/adding-harness-approval-stages/#using-the-approvals-api-with-service-account-authentication). <b> This feature is in Limited GA. </b> |
| CDS_AWS_SESSION_TOKEN_SUPPORT | Enables users to use JET identity tokens for authentication for AWS connectors. <b> This feature is in Limited GA. </b>|
| CDS_AWS_EKS_CLUSTER_MANUAL_CONFIGURATION | Enables users to manually configure the connection to Amazon EKS clusters by providing the endpoint and optional CA cert. <b> This feature is in Limited GA. </b> |
| CDS_LIST_BRANCH_V2 | Enables users to search branches in a repository with infinite scroll and add branches manually when needed.<b> This feature is in Limited GA. </b> |
| CDS_ENABLE_RAW_MODE | This feature requires enabling an Account-level setting after the Feature Flag is enabled. When this setting is disabled, blank fields are treated as Null. Enabling this option will treat blank fields as empty strings. Please be aware that this change may be disruptive to existing Input Sets.<br/> To learn more, refer [Handling empty strings](/docs/platform/pipelines/input-data-preprocessing/). <b> This feature is in Limited GA. </b> |
| CDS_STORE_TERRAFORM_PLAN_FILE_LOCALLY_ON_DELEGATE | Enables users to store the Terraform Plan temporarily on Harness Delegate, avoiding Secrets Manager storage or file size limits. <b> This feature is in Limited GA. </b> |
| CDS_MARK_PIPELINE_AS_FAILURE | Enables users to mark a running pipeline as failed, triggering failure strategies for all executing stages. <b> This feature is in Limited GA. </b> |
| CDS_AUTH_CHECK_IN_WEBHOOK_DETAILS_ENDPOINTS | Enables users to track deployment status programmatically via REST using the apiUrl from a custom trigger's JSON response. <b> This feature is in Limited GA. </b>|
| CDS_PIPELINE_ABORT_RBAC_PERMISSION_MIGRATION | Enables users to run RBAC validation before executing inline pipelines to ensure access to required environments and resources. <b> This feature is in Limited GA. </b>|
| CDS_PIPELINE_ABORT_RBAC_PERMISSION | Enables users to control Abort permission separately from other pipeline execute functions. <b> This Feature is in Beta. </b> |
| CDS_REMOVE_CONNECTOR_HEARTBEAT | Enables users to set Pre Flight Check as the default for pipeline execution. <b> This feature is in Limited GA. </b>|
| PL_GCP_OIDC_AUTHENTICATION | Enables user to configure custom attributes for OIDC with the GCP connector. <b> This feature is in Limited GA. </b> |
| CDS_EVENT_BRIDGE_WEBHOOK and CD_TRIGGERS_REFACTOR| Enables users to trigger pipelines in real time using the newly introduced EventBridge webhooks, which can be configured with Git, Slack, or generic options (such as Nexus artifacts). <b> This feature is in Limited GA. </b> |
| PIPE_ENABLE_FILE_UPLOAD_AS_RUNTIME_INPUT | Enables users to upload files as a runtime input during execution of a pipeline using **File Upload** step. <b> This feature is in Limited GA. </b>|
| CDS_ENCODE_API_REQUESTS | Enables users to fetch an artifact version from Nexus during deployment. <b> This feature is in Limited GA. </b>|
| CDS_EMAIL_USE_DEFAULT_FORMATTING | Enables user to send HTML content in the email body in the **Email Step**. <b> This feature is in Limited GA. </b> |
| CDS_K8S_SANITIZE_COMPLETE_DRY_RUN_STEP_OUTPUT | Enables users to access Kubernetes service and job names in the exported manifest. <b> This feature is in Limited GA. </b> |
| CDS_K8S_ASYNC_STEP_STRATEGY | Enables users to view log details in the UI when a pipeline with K8s async steps times out. <b> This feature is in Limited GA. </b>|
| CDS_ASG_ROLLOUT_ROLLBACK_INSTANCE_REFRESH | Enable this feature to eliminate downtime during the Auto Scaling Group (ASG) rollback instance refresh. <b> This feature is in Limited GA. </b>|
| CDS_CF_CLI_ENVIRONMENT_VARIABLE_SUPPORT | Enables users to configure CLI environment variables for Tanzu Application Service deployment in the Service and overrides. <b> This feature is in Limited GA. </b>|
| CDS_ALLOWED_VALUES_DROPDOWN_PDC_HOSTS | Enables users to define allowed values in the Select Hosts settings under infrastructure. In the runtime view, a multi-select dropdown will be displayed, allowing users to choose from the predefined allowed values. <b> This feature is GA. </b>|
| CDS_OVERRIDES_GITX | Enables users to manage overrides using Git, with options to store them remotely or inline <b> This feature is in Limited GA. </b>|
| CDS_MULTI_DEPLOYMENT_ON_FAILURE | Enables users to apply failure strategies during multi-service, multi-infrastructure, and matrix deployments. <b> This feature is in Limited GA. </b>|
| CDS_SERVICE_INFRA_FAILURE_STRATEGY | Enables a failure strategy for the service, where the service step will, by default, inherit the failure strategy from the stage. <b> This feature is in Limited GA. </b>|
| CDS_SPECIFY_INFRASTRUCTURES | Enables users to select all the infrastructures in the environment by choosing the **All Infrastructures** checkbox. <b> This feature is GA. </b>|
| PIPE_FILTER_EXECUTIONS_BY_GIT_EVENTS | This enables users to view both manual executions and those triggered automatically by Git pull requests (PRs) in the My Executions filter on the listing page. Executions triggered by GitHub PRs, as well as manually triggered pipeline executions, will appear in the My Executions list. <b> This feature is in Limited GA. </b>|
| CDS_SERVICE_ENV_CLONING | Enables users to clone services across different scopes, such as from one project to another, from a project to an organization, or from an account to a project, as well as across environment scopes. <b> This feature is in Limited GA. </b>|
| PIPE_MARK_PARENT_PIPELINE_STATUS_WAITING_AS_CHILD | Enables users to see both the parent and child pipeline statuses as "Waiting" when the child pipeline is in a wait step during pipeline chaining, instead of having the parent pipeline show as **Running** while the child shows as **Waiting**. <b> This feature is in Limited GA. </b>|
| CDS_LIST_REPO_V2 | Enables users to search for repositories with infinite scroll support in a specific connector. By entering any keyword, related repositories will be displayed. If the desired repository is not found, users can also add it manually. <b> This feature is in Limited GA. </b>|
| ENV_GROUP_DEPLOYMENTS_IN_SERIAL | Enables users to use the serial deployment of environment groups. <b> This feature is in Limited GA. </b>|
| PIE_SHOW_ALL_EXECUTIONS_FILTER | Enables users to lists all pipeline executions including retired and child executions in the Executions page. <b> This feature is GA. </b>|
| CDS_DISABLE_FALLBACK_EXPRESSION_ENGINE | Enables users to leverage the updated expression resolution fallback logic, which now calls the fallback more effectively. <b> This feature is in Limited GA. </b> |
| GITOPS_AGENT_HELM_V2 | Enables you to download a helm-chart file for the Harness GitOps Agent. <b> This feature is GA. </b> |
| CDS_GITOPS_LABELS_BASED_ACCESS_TO_APPS | Allow users to filter applications based on labels while creating a resource group for Gitops application. <b> This feature is in Limited GA. </b> |
| GITOPS_MULTI_SOURCE_ENABLED | Enables users to support Multi-Source applications with ArgoCD in Harness GitOps. <b> This feature is in Limited GA. </b> |
| GITOPS_GET_APP_DETAILS_STEP | Enables users to fetch the details and status of their application. <b> This feature is in Limited GA. </b> |
| CDS_HELM_STEADY_STATE_CHECK_1_16 | Allow users leveraging Kubernetes version 1.16 or later to perform steady state check for Helm deployments. <b> This feature is in Limited GA. </b> |
| OPA_PIPELINE_GOVERNANCE | Enables [Policy as code](/docs/platform/governance/policy-as-code/harness-governance-overview) for a Harness account. <b> This feature is GA. </b> |
| CDS_HELM_VERSION_3_8_0 | Sets the default version of Helm to 3.8 when using the Harness Helm delegate. <b> This feature is in Limited GA. </b> |
| NG_PIPELINE_TEMPLATE | Enables [Harness templates](https://developer.harness.io/docs/platform/templates/create-pipeline-template). <b> This feature is Limited GA. </b> |
| OPA_GIT_GOVERNANCE | Store and fetch your <a href="/docs/platform/governance/policy-as-code/configure-gitexperience-for-opa">OPA policies in Git.</a>. <b> This feature is Limited GA. </b> |
| NG_CUSTOM_STAGE | Enables the[Custom stage](/docs/platform/pipelines/add-a-stage/#add-a-custom-stage) for use in a pipeline. <b> This feature is GA. </b> |
| NG_GIT_EXPERIENCE | Enables <a href="/docs/platform/git-experience/configure-git-experience-for-harness-entities">Harness Git Experience</a> for a Harness account. Users can manage their Pipeline, Templates, Input Sets, Feature Flags via Git. <b>This feature is GA.</b> |
| CDP_USE_OLD_GIT_SYNC | Enables the previous, deprecated version of Git Experience. This flag is only enabled for customers who have not migrated over to <a href="/docs/platform/git-experience/configure-git-experience-for-harness-entities">Harness Git Experience</a>. |
| CDS_DISABLE_HELM_REPO_YAML_CACHE | Disables Helm repository caching on the Harness Delegate. This should only be enabled if users are experiencing failures with Harness Delegate failing to fetch Helm Charts. Caching could be the source of the issue. <b> This Feature is in Beta. </b> |
| CD_GIT_WEBHOOK_POLLING | Enables configurable polling for <a href="/docs/platform/triggers/triggering-pipelines/">GitHub Webhooks</a> This allows users to set polling interval for Harness Delegate to poll your GitHub instance. <b>This feature is in Limited GA.</b> |
| CDS_DISABLE_WINRM_COMMAND_ENCODING_NG | Prevents the encoding of WinRM commands. By default Harness encodes the winrm commands we run on hosts. User's can disable this behavior via this feature flag. <b>This feature is in Limited GA.</b> |
| CDS_TERRAFORM_S3_SUPPORT | Enables AWS S3 for Terraform plan storage. <b>This feature flag is Limited GA.</b> |
| CDP_USE_K8S_DECLARATIVE_ROLLBACK | Enables the <a href="/docs/continuous-delivery/deploy-srv-diff-platforms/kubernetes/cd-k8s-ref/kubernetes-rollback/#declarative-rollback">declarative rollback</a> behavior for services. <b>This feature is in Beta.</b> |
| CDS_K8S_SOCKET_CAPABILITY_CHECK_NG | Replaces the HTTP capability check for the Kubernetes connector with socket capability. <b>This feature is in Beta.</b> |
| PIE_GET_FILE_CONTENT_ONLY | Optimizes the execution flow to fetch only file content for remote entities. |
| CDS_SERVICE_CONFIG_LAST_STEP | Allows users on the last step of manifest/artifact/config files, if these configs are in edit mode. <b>This feature is in Limited GA.</b> |
| PIE_USE_SECRET_FUNCTOR_WITH_RBAC | Performs RBAC check on secrets when used in pipeline execution. <b>This feature is in Beta.</b> |
| CDS_GIT_CONFIG_FILES | Enables config files to be <a href="/docs/continuous-delivery/x-platform-cd-features/services/cd-services-config-files">managed in Git.</a> |
| PIE_GITX_OAUTH | Uses users' OAuth credentials to fetch and commit in Git. <b>This feature is in Limited GA.</b> |
| PIE_MULTISELECT_AND_COMMA_IN_ALLOWED_VALUES | Enables the ability to <a href="/docs/platform/variables-and-expressions/runtime-inputs/#multiple-selection">choose multiple values from a list of allowed values.</a> |
| CDS_ARTIFACTS_PRIMARY_IDENTIFIER | Allows you to change the expression value for the primary artifact identifier. <b>This feature is in Beta.</b> |
| CDS_SUPPORT_HPA_AND_PDB_NG | Enables [PDB and HPA tracking](/docs/continuous-delivery/deploy-srv-diff-platforms/kubernetes/cd-k8s-ref/what-can-i-deploy-in-kubernetes/#managed-workloads-table) as managed resources by Harness. <b>This feature is in Limited GA.</b> |
| CDS_SSH_SSHJ | Enables a library upgrade for SSH Deployments to use newer algorithms of SSH to connect to hosts. All Delegates on 803xx Release will have the new upgraded library. <b>This feature is Limited GA.</b> |
| CDS_SSH_CLIENT | Enables a library upgrade for SSH Deployments  to use newer algorithms of SSH to connect to hosts. All Delegates on 803xx Release will have the new upgraded library. <b>This feature is Limited GA.</b> |
| CD_TRIGGER_CATALOG_API_ENABLED | Fetches the list of Trigger options by an API call instead of from the UI. |
| CDS_SERVICE_OVERRIDES_2_0 | Enables <a href="/docs/continuous-delivery/x-platform-cd-features/overrides-v2">overrides v2 experience</a>. <b>This feature is in Beta.</b> |
| CDS_TEMPLATE_ERROR_HANDLING | Adds enhanced error handling for templates by schema validation errors. <b>This feature is in Limited GA.</b> |
| CDS_HELM_STEADY_STATE_CHECK_1_16_V2_NG | Enables steady state check for Helm deployments on Kubernetes clusters using 1.16 or higher. <b>This feature is in Beta.</b> |
| CDS_AZURE_WEBAPP_LISTING_APP_NAMES_AND_SLOTS | Enables users to select Azure WebApps in a drop down for slot deployments. <b>This feature is in Limited GA.</b> |
| CDS_RESOLVE_OBJECTS_VIA_JSON_SELECT | Support resolution of objects via the JSON Select Command in the HTTP step. <b>This feature is in Beta.</b> |
| CDS_ENABLE_LOAD_FROM_CACHE_FOR_RETRY_FORM | Enables a load from cache option on pipeline execution retry form. <b>This feature is in Beta.</b> |
| CDS_ENV_PROPAGATION | Enables environment propagation across CD stages. <b>This feature is in Limited GA.</b> |
| CDS_RECONFIGURE_JIRA_APPROVAL_TIMEOUT | Reduces timeout for Jira from 5 minutes to 1 minute and allows pausing of approval. <b>This feature is in Beta.</b> |
| CDS_NG_SERVICE_PRINCIPAL_FOR_CUSTOM_WEBHOOK | Makes authenticated custom Webhook calls use the service principal instead of the principal inherited from the API key. <b>This feature is in Beta.</b> |
| CD_MAKE_CD_LICENSE_USAGE_ASYNC | Enables CD License Usage dashboards to be asynchronous. <b>This feature is in Beta.</b> |
| CDS_ENABLE_SHELL_SCRIPT_FILE_REFERENCE | Enables the Shell Script step to support scripts from Harness File Store. <b>This feature is in Beta.</b> |
| CDS_DISABLE_EVALUATE_EXPORT_VARIABLES | Enables exporting variables without evaluating them in the Command step. <b>This feature is in Beta.</b> |
| CD_CONTAINER_STEP_DELEGATE_SELECTOR | Makes the Container step to respect the delegate selector configured at the pipeline. <b>This feature is in Beta.</b> |
| OPA_AIDA_WIDGET | Enables <a href="/docs/platform/governance/policy-as-code/aida-for-policies">AIDA for OPA</a>. <b>This feature is in Beta.</b> |
| PIE_SIMPLIFY_LOG_BASE_KEY | Reduces the length of the log base key. <b>This feature is in Beta.</b><br/>This feature requires delegate version 23.10.81010 or later.<br/>After enabling this feature flag, you must re-run your pipelines to apply the change.<br/>For more information, go to <a href="/docs/platform/pipelines/executions-and-logs/download-logs">Download execution logs</a>. |
| PIE_ASYNC_FILTER_CREATION | Sets pipeline CRUD calls to filter creation asynchronously. <b>This feature is in Beta.</b> |
| CDS_AWS_OIDC_AUTHENTICATION | Enables the option to connect to AWS with OIDC. Currently, this option is only supported for Kubernetes, Helm, Terraform, ECS, and Cloudformation. <b>This is a Beta feature.</b> |
| CV_NEWRELIC_NEW_API | Enable this feature if you want to use the NerdGraph API for the NewRelic Health Source. <b>This is a Beta feature.</b> |
| CDS_CONTAINER_STEP_GROUP_RUN_AS_USER_AND_PRIVILEGED_FIX | Enable this feature if you want updated logic for permissions inheritance between steps and their step groups. To learn more go to [Step Group Inheritance Logic](/kb/continuous-delivery/articles/configuration-inheritance-stepgroup-step). <b>This is a Beta feature.</b> |
| CV_MONITORED_SERVICE_TEMPLATIZATION | Enable this feature if you want to select a monitored service template as a runtime input. To learn more, go to [Select a monitored service template during runtime](/docs/continuous-delivery/verify/cv-getstarted/configure-first-cv#select-a-monitored-service-template-during-runtime). <b>This is a Beta feature.</b> |
| CDS_OPA_CD_ENTITIES_GOVERNANCE | Enable this feature if you want to enforce OPA policy on Service, Environment, Infrastructure Definitions and Overrides <b>This is a Beta feature.</b> |
| CDS_ASYNC_EXECUTABLE_USE_SELECTORS | When enabled the delegate selector priorities are correctly handled in Helm Blue/Green and Canary Deployment steps. <b>This is a Beta feature.</b> |
| CDS_BLUE_GREEN_RESOURCE_FORMAT_FIX | When enabled it ensure correct resource formatting during Helm Blue-Green deployments. <b>This is a Beta feature.</b> |
| CDS_NAV_MODULE_VISIBILITY | When enabled Admin users can hide unsubscribed modules from the sidebar, ensuring only subscribed modules are visible to team members. This helps streamline the user experience and prevents access to steps or features from unsubscribed modules. <b>This is a Beta feature.</b> |
| GITOPS_FILTER_PANE_ENABLED | When enabled, GitOps users can create and save application filters in the GitOps Applications page. <b> This is a Beta feature </b> |
| FF_PIE_SET_ADVISORS_PROCESSED | When enabled the calculation of `<+stage.CurrentStatus>` exclude steps where the failure strategy has not yet been triggered. This ensures that steps are not prematurely skipped due to transient failure states, resulting in more reliable execution. <b>This is a Beta feature.</b> |
| CDS_EXECUTION_LIST_FILTERS | Enable this feature to improve filter UI on the execution list view. Use the new UI to add filter parameters, make custom filters, and save them, easier than before. **This is a Beta feature**. |
| CDS_EXECUTION_LIST_CARD_VIEW | Enable this feature to improve the cards for the execution list view. This allows for other modules data to be displayed in each card on the list. **This is a Beta feature** |
| CDS_RECENT_SCOPES | When enabled, hover over the scope selector to navigate to your five most recent scopes. Clicking the scope selector will continue to be the usual scope selection flow. **This is a Beta feature**. |
| CDS_SETTINGS_ACCORDION | When enabled, a pop up tile will appear when hovering over **Project Settings** in the left navigation pane. **This is a Beta feature**. |
| CDS_AWS_LAMBDA_ROLLBACK_V2 | When enabled, users can deploy Lambda artifacts larger than 50 MB stored in S3 **This is a Beta feature**. |
| CDS_K8S_TRAFFIC_ROUTE_REWRITE_RULE_SUPPORT | When enabled, users can define and manage rewrite rules to control traffic routing in Kubernetes traffic routing configuration. **This is a Beta feature**. |
| CDS_GITLAB_TRIGGER_TAG_EVENT | When enabled, u​sers can trigger pipelines in GitLab upon the creation or pushing of tags. **This is a Beta feature**. |
| CDS_OPTIONAL_VALUES_YAML | When enabled, ​users can utilize an optional checkbox for Kubernetes and Helm deployment types while configuring manifest and overrides. **This is a Beta feature**. |
| CDS_DEPLOYMENT_FREEZE_GRANULAR_RBAC | When enabled, users can manage Deployment Freeze Windows with granularity based on Environment Types, allowing for more fine-tuned control over deployment windows. **This is a Beta feature**. |
| CDS_INCLUDE_EMPTY_VALUE | When enabled, this will allow empty values to be accepted as an allowed value for runtime inputs. **This is a Beta feature**. |
| CDS_MANIFEST_HASH_WITH_DECLARATIVE_ROLLBACK | When enabled, this flag enables declarative rollback for changes to solely ConfigMap and Secret object changes. **This is a Beta feature** |
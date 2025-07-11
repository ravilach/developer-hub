---
title: Download dashboard data
description: This page describes how to download content from By Harness Dashboards.
# sidebar_position: 2
helpdocs_topic_id: op59lb1pxv
helpdocs_category_id: id0hnxv6sg
helpdocs_is_private: false
helpdocs_is_published: true
---

This page describes how to download content, visualizations or data, from the **Dashboards**. You can download data using the following options:

* Download Data from a Dashboard
* Download Data from a Dashboard Tile
* Download Data from a Dashboard via direct API integration

### Before you begin

* [Create Dashboards](create-dashboards.md)
* [Create Visualizations and Graphs](create-visualizations-and-graphs.md)

### Download Data from a Dashboard

Perform the following steps to download data from a Dashboard.

1. To download the entire dashboard, select **Download** from the dashboard’s three-dot menu.![](./static/download-dashboard-data-20.png)
2. Select PDF or CSV as your download format.

#### Download a Dashboard as a PDF

You can download your entire dashboard as a PDF. The PDF contains the dashboard title, any dashboard filters, all the dashboard tiles, and the time zone the dashboard was run in. The PDF also includes a timestamp showing when the dashboard was downloaded.

1. In **Download AWS Cost Dashboard**, in **Format**, select **PDF**.
   
   ![](./static/download-dashboard-data-21.png)
   
2. Select an option from the **Paper Size** drop-down menu. The **Fit Page to Dashboard** option is the default; it sizes the PDF to match the layout of the dashboard on the screen. Other paper size options size the PDF to match a standard paper size and fit the dashboard within it.  
  
   Depending on the layout of the dashboard, large visualizations or groups of overlapping tiles may need to be resized to fit on given page size.

   ![](./static/download-dashboard-data-22.png)

3. If you select something other than **Fit Page to Dashboard** in the **Paper Size** drop-down, an **Orientation** option appears. You can choose to orient the dashboard in portrait or landscape position.
4. Do not select **Expand tables to show all rows**. This option is relevant only for the table visualizations. If selected, the PDF will show all the rows available in the table visualization, not just the rows displayed in the dashboard tile thumbnail.
5. Select or leave unselected **Arrange dashboard tiles in a single column**. If you select this option, the PDF displays dashboard tiles in a single vertical column. If you do not select this option, the dashboard tiles appear as they are arranged in the dashboard.
6. Click **Open in Browser** to see an image of the PDF in a new tab of your browser. This also downloads a PDF in the Download folder.
7. Click **Cancel** if you no longer want to download the dashboard.
8. Click **Download** to initiate the download. A new tab in your browser will open, showing the status of your download.!
   
    [](./static/download-dashboard-data-23.png)
    

#### Download a Dashboard as CSVs

You can download all the tiles from your dashboard as a zipped collection of CSV files. 

1. In **Download AWS Cost Dashboard**, in **Format**, select **CSV** from the **Format** drop-down menu.
   
   ![](./static/download-dashboard-data-24.png)
   
2. Click **Cancel** if you no longer want to download the dashboard.
3. Click **Download** to initiate the download your zipped CSV collection.

### Download Data from a Dashboard Tile

Perform the following steps to download the data from a dashboard tile:

1. Click the three-dot icon (Tile action) on the tile and click **Download data**.![](./static/download-dashboard-data-25.png)
2. Select the format for your download. Data can be downloaded from dashboard tiles in the following formats:
	* TXT (tab-separated values)
	* Excel spreadsheet (Excel 2007 or later)
	* CSV
	* JSON
	* HTML
	* Markdown
	* PNG (image of visualization)Depending on the format you select, some options in the **Advanced data options** menu may not be available.
  
      ![](./static/download-dashboard-data-26.png)
  
3. (Optional) For more options, click the arrow next to **Advanced data options**.
	1. In **Results**, select **As displayed in the data table**.
	2. In **Data** **Values**, choose how you want the downloaded query results to appear:  
	
		* If you choose **Unformatted**, special formatting is not applied to your query results, such as rounding long numbers or adding special characters that may have been put in place.
		* If you choose **Formatted**, the data appears more similar to the Dashboard experience in Harness.
	3. In the Number of rows to include, choose how much data you want to download:  
	
		* **Current results table**: Number of rows specified by the row limit
		* **All Results**: All results returned by the query
		* **Custom**: Custom number of rows
4. Once you’ve selected your options, click the **Download** button to download a file to your computer, or click **Open in Browser** to view the file in the browser.

### See also

You can choose to download the following By Harness CCM Dashboards:

* [View AWS Cost Dashboard](../../cloud-cost-management/3-use-ccm-cost-reporting/6-use-ccm-dashboards/aws-dashboard.md)
* [View Azure Cost Dashboard](../../cloud-cost-management/3-use-ccm-cost-reporting/6-use-ccm-dashboards/azure-cost-dashboard.md)
* [View GCP Dashboard](../../cloud-cost-management/3-use-ccm-cost-reporting/6-use-ccm-dashboards/gcp-dashboard.md)
* [View Cluster Cost Dashboard](../../cloud-cost-management/3-use-ccm-cost-reporting/6-use-ccm-dashboards/cluster-cost-dashboard.md)
* [View Multi-cloud Cost Overview Dashboard](../../cloud-cost-management/3-use-ccm-cost-reporting/6-use-ccm-dashboards/multi-cloud-cost-overview-dashboard.md)
* [Orphaned EBS Volumes and Snapshots Dashboard](../../cloud-cost-management/3-use-ccm-cost-reporting/6-use-ccm-dashboards/orphaned-ebs-volumes-and-snapshots-dashboard.md)
* [View AWS EC2 Inventory Cost Dashboard](../../cloud-cost-management/3-use-ccm-cost-reporting/6-use-ccm-dashboards/view-aws-ec-2-inventory-cost-dashboard.md)
* [View AWS EC2 Instance Metrics Dashboard](../../cloud-cost-management/3-use-ccm-cost-reporting/6-use-ccm-dashboards/view-aws-ec-2-instance-metrics.md)


### Downloading Dashboard data via Harness API

Harness provides API endpoints for managing asynchronous download tasks for data within Dashboard Elements.

#### Authentication

You will need to set up a Harness API Key in order to make use of this process, see the document below for help with getting started:
* [Manage API Key](https://developer.harness.io/docs/platform/automation/api/add-and-manage-api-keys/)

#### How to download Dashboard Element data via the Harness API

To download the data within a specific Dashboard Element, follow the steps below:

1. [GET - Dashboard Elements](https://apidocs.harness.io/tag/dashboards#operation/get_dashboard_elements)
	* To get a list of elements within a Dashboard.
	* Copy the `id` of the particular element you wish to download the data of.
2. [POST - Create Download Dashboard Element Task](https://apidocs.harness.io/tag/downloads#operation/create_dashboard_element_download_task)
	* This begins an asynchronous task that prepares the data of the specified dashboard element for download.	
 	* Use the `id` of the Dashboard Element you wish to download the data of.
 	* Copy the `task_id` that is returned.
3. [GET - Download Task Status](https://apidocs.harness.io/tag/downloads#operation/get_download_task_status)
	* Periodically poll this with the `task_id` in order to check the status of the download task.
	* When a status of `success` is returned, you can proceed to the next step.
4. [GET - Download Dashboard Element Task Results](https://apidocs.harness.io/tag/downloads#operation/get_dashboard_element_download_task_results)
	* Run this with the `task_id` only after the task status returns as `success`.
 	* The results can be downloaded as a stream in the format of `application/zip`.

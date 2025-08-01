---
title: Overview
description: Measure AI productivity insights
sidebar_position: 10
sidebar_label: Overview
redirect_from:
  - /docs/software-engineering-insights/ai-productivity-insights/dashboards/ai-overview-dashboard
---

The AI Insights overview dashboard presents a side-by-side comparison of productivity between teams using AI and those not using AI and how it impacts key factors such as quality, velocity and developer experience. The dashboard focuses on three key areas:

* Productivity changes between AI-enabled and non-AI cohorts
* Detailed productivity scores for both cohorts
* Potential economic benefits of AI adoption

Each of the factors contributing to the productivity scores is represented as individual widgets where each widget highlights high-level metrics for teams using AI tools versus those that are not, with options to drill down into detailed insights.

## The big picture view

Imagine you're looking at a real-time snapshot of your development team. The overview dashboard shows you:

* Two cohorts side by side
  * Cohort A: Group of developers working traditionally (without AI)
  * Cohort B: Group of developers using AI tools
* Three key stories
  * How much faster work gets done
  * How much better the code quality is
  * How your developers feel about their work

### Focus areas

* **Productivity comparison: Compare productivity scores between:**
  * Cohort A: Developers working traditionally (without AI).
  * Cohort B: Developers using AI tools like AI code assistants such as Google Gemini, GitHub Copilot etc
* **Detailed productivity scores:** View category-wise scores ([Velocity](#velocity), [Quality](#velocity), and [Experience](#experience)) for each cohort. These scores provide insight into how AI tools influence different aspects of your team's performance.
* **Economic impact:** Helps you estimate the [Potential Economic Benefit (PEB)](#potential-economic-benefit-peb) of adopting AI tools across your organization, based on observed productivity boosts.

### What you can derive from AI Insights

* **Performance Gains:** Determine whether usage of AI tools are making your team faster, more efficient, and happier.
* **Targeted Improvements:** Identify which areas (speed, code quality, or developer satisfaction) benefit most from AI tools.
* **Cost Savings:** Quantify the potential dollar savings from improved productivity with AI adoption.

## Productivity scores

The Productivity Score is a composite measure that reflects the performance of a team. It is derived from three key categories: Velocity, Quality, and Developer Experience. These categories contribute to the overall productivity score based on predefined weights, with each category containing various metrics that are evaluated within specific ranges.

* **Velocity:** Measures delivery speed through metrics like PR Lead Time, Number of Commits etc
* **Quality:** Evaluates the rework and refactor percentages in your codebase.
* **Sentiment:** Captures team feedback through survey results.

![](../static/productivity-scores.png)

## Productivity scores calculation

### Category scores

Each category represents an important part of your team’s work. These categories are:

* **Velocity:** How quickly work gets done (e.g., PR lead time, number of commits).
* **Quality:** How well the work is done (e.g., percentage of rework, percentage of refactor).
* **Sentiment:** How your team feels about their work (this comes from a survey where team members rate their experiences).

Each category is made up of individual metrics, which measure specific things like *"how many PRs were created"* or *"how fast a change was delivered"*. The category score is the weighted average of the underlying metrics within it. Below are the list of contributing metrics and the pre-defined weightages for each category:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
   <TabItem value = "velocity" label = "Velocity" default>

Velocity reflects the speed at which developers deliver work and includes the following metrics:

* **PR lead time:** The time taken from code being committed to running successfully in production.
* **Number of commits:** The average number of code commits made per developer during a specific period.
* **Number of PRs created:** The average number of pull requests created by developers within a given time frame.
* **Number of PRs merged:** The average number of pull requests successfully merged across all developers within the given time frame.

#### Velocity metrics & ranges

| Metric             | Worst Value  | Best Value  |
|-------------------|--------------|-------------|
| PR Lead Time      | 9 days        | 4 days      |
| Average Commits   | 2.5 commits   | 3.75 commits |
| Average PRs Created | 1 PR         | 2 PRs       |
| Average PRs Merged | 1 PR         | 2 PRs       |
| Average New Lines | 20 lines      | 400 lines   |

</TabItem>

<TabItem value="quality" label="Quality">

Analyze code quality by measuring rework and refactor percentages.

* **Percentage of rework:** The amount of changes made to code that is less than 30 days old.
* **Percentage of refactor:** Refactor work represents changes to legacy code. Harness Software Engineering Insights considers code "legacy" 
if it has been in your codebase for over 30 days.

#### Quality metrics & ranges

| Metric              | Worst Value  | Best Value  |
|--------------------|--------------|-------------|
| Percentage of rework | 9%           | 19%         |
| Percentage of refactor | 9%          | 19%         |

</TabItem>

<TabItem value="dev-ex" label="Developer Experience">

Survey responses are divided into subcategories (e.g., satisfaction, innovation) that contribute to the overall sentiment score.
The system applies predefined weights to each metric, ensuring fair contribution across aspects. The scores for these metrics are derived from survey responses and are used to calculate the Developer experience score.

| **Category**   | **Weightage** | **Purpose**                                             |
|---------------|--------------|---------------------------------------------------------|
| Efficiency    | e.g., 20%     | Measures the impact of AI on task streamlining.         |
| Innovation    | e.g., 20%     | Evaluates how AI fosters creativity and solutions.      |
| Productivity  | e.g., 20%     | Assesses overall work output with AI tools.             |
| Quality       | e.g., 20%     | Examines code and workflow quality improvements.        |
| Satisfaction  | e.g., 20%     | Measures developer happiness with AI tools.             |

</TabItem>
</Tabs>

### Category score calculation

Each metric (like PR lead time or Average number of PRs) has a range of possible values. The system converts these values into scores on a scale of 0 to 100, helping you easily analyze performance.

| Score Value | Description                                                              |
|-------------|--------------------------------------------------------------------------|
| **0**       | The worst possible value, meaning it’s below the minimum value defined by your team. |
| **1**       | The lowest acceptable value in the defined range. (minimum threshold)         |
| **99**      | The highest acceptable value in the defined range. (maximum threshold)      |
| **100**     | The best possible value, meaning the metric is even better than the best value you’ve set. |

### Scoring example

For example: In this case the PR lead time range has a defined range from 9 days (worst case) to 4 days (best case), and the current value is 6 days.

To determine the score, the system calculates how far the current value is within the defined range. The closer the value is to the best case (4 days), the higher the score. The system uses linear function to calculate this score.

```ssh
Worst Acceptable Value (Minimum Threshold): 9 days
(Indicates poor performance - PRs take too long to merge)

Best Acceptable Value (Maximum Threshold): 4 days
(Indicates excellent performance - PRs merge quickly)

Actual PR Lead Time: 6 days

Total Range = Worst Value - Best Value  
            = 9 days - 4 days  
            = 5 days  

Improvement Over Worst Case = Worst Value - Actual Value  
                            = 9 days - 6 days  
                            = 3 days  

Score = (Improvement Over Worst Case / Total Range) × 100  
      = (3 days / 5 days) × 100  
      = 60  
```

### Overall productivity score

The overall productivity score for each cohort is a weighted average of all category scores, combining velocity, quality, and sentiment into a single measure of performance. Once we have your category scores for velocity, quality, and sentiment, we combine them into one final productivity score. Each category has a weight, which determines how much influence it has on the overall score. For example:

* Velocity might account for 30% of the score.
* Quality might also account for 30%.
* Sentiment could account for the remaining 40%.

Here’s the formula to calculate the overall Productivity Score:

```ssh
Productivity Score = (Velocity Score × 0.30) + (Quality Score × 0.30) + (Sentiment Score × 0.40)
```

## Productivity boost

The productivity boost metric measures the change in performance between two groups (cohorts) over time, helping you evaluate the impact of AI tools on team efficiency.

Productivity boost is calculated using the following formula:

```ssh
Productivity boost = Productivity score of cohort A / Productivity score of cohort B - 1
```

where

* Cohort A: The baseline group (e.g., developers not using AI tools).
* Cohort B: The test group (e.g., developers using AI tools like an AI code assistant).

#### Interpretation

* Greater than 0: Positive impact from AI tools.
* Productivity boost is 0: No measurable impact.
* Lesser than 0: Performance decline; investigate tool adoption barriers.

A **positive productivity boost** indicates an improvement in performance, while zero suggests a decline. If the boost is zero, the **Potential Economic Benefit (PEB)** will be set to **$0**, implying no economic gain from AI implementation.

![](../static/productivity-boost.png)

## Potential Economic Benefit (PEB)

The **Potential Economic Benefit** represents the potential dollar amount saved by increasing developer productivity through AI tool adoption. It helps you estimate the economic benefits of rolling out AI code assistants across your entire organization based on productivity gains.

![](../static/peb.png)

### How is PEB determined?

PEB is determined by the productivity boost observed in Cohort B (AI-enabled team) compared to Cohort A (non-AI team). The formula assumes that the productivity gain leads to cost savings by reducing the time developers spend on tasks.

PEB is calculated using the following formula:

```bash
PEB = Average developer cost × Time interval × (Size of the Cohort using AI + Size of the Cohort not using AI) × Productivity boost in the selected time interval.
```

* **Average developer cost:** The annual cost of a single developer. The default is $130,000 (based on 2023 U.S. Bureau of Labor Statistics)
* **Time interval:** The duration of the selected time interval in the dashboard in years (e.g., if the selected time interval is 3 months, this is 0.25 years).
* **Size of the Cohort using AI:** The number of developers using AI code assistants.
* **Size of the Cohort not using AI:** The number of developers in the cohort that is not using AI code assistants (non-AI users).
* **Productivity boost:** The improvement in developer productivity (expressed as a percentage) due to AI tool adoption in the selected time interval.

**​​Minimum Value of PEB:**

The minimum value of PEB is $0. If the productivity boost is negative i.e. zero, there is no economic value generated, and the system will set the PEB to zero, indicating no cost-saving benefits from AI tools.

## Category widgets

### Velocity

The **Velocity** widget provides a comparative analysis of key engineering productivity metrics for cohorts i.e. teams **using Coding Assistant vs. not using Coding Assistant.** This widget captures critical data points that influence software delivery speed and efficiency, including:

* **Number of Commits** – Tracks the volume of code contributions over time. A higher number indicates active development but should be considered alongside merges to ensure meaningful progress. 
* **Number of Merges** – Measures how often code is successfully integrated into the main branch, reflecting collaboration and code stability.
* **PR Lead Time** – The time taken from opening a pull request to merging it. A shorter lead time suggests improved efficiency in code reviews and deployment.
* **New Lines of Code** – Indicates the volume of new code being introduced. While higher values can indicate productivity, they should be evaluated with rework metrics to ensure code quality.
* **Number of PRs Created** – Represents the frequency of code changes submitted. More PRs may suggest an iterative approach to development, but reviewing their size and quality is important.

The **Velocity score** is a composite measure that reflects the team’s ability to deliver software efficiently. Higher scores indicate faster software delivery, while lower scores may highlight inefficiencies in processes.

![](../static/overview-velocity.png)

#### How to derive value

By analyzing the Velocity widget, you can:

* **Compare efficiency across teams:** Identify differences in development speed between AI-enabled teams and traditional teams.
* **Spot trends in delivery bottlenecks:** If PR lead time is high but the number of commits is also high, it may indicate delays in code reviews or integration.
* **Balance speed and quality:** A high number of commits without corresponding merges might indicate fragmented work, requiring further investigation.

Understanding a combination of metrics is key. For example, an increase in new lines of code without a corresponding rise in merges might signal inefficiencies in the review process.

#### Detailed view

Selecting [**View Details**](/docs/software-engineering-insights/propelo-sei/ai-productivity-insights/dashboards/velocity-dashboard) provides a granular breakdown of each metric's contribution to the overall Velocity score. This view helps teams:

* Pinpoint stages causing delays in PR cycles.  
* Determine which development activities contribute most to velocity gains.
* Analyze trends to identify areas for process optimization.  

### Quality

The **Quality** widget provides a side-by-side comparison of key code quality metrics between teams **using Coding Assistant vs. not using Coding Assistant.** The metrics tracked include:

* **Rework Percentage** – Measures the proportion of code that requires rework post-review. High rework rates can indicate recurring quality issues or unclear requirements.  
* **Refactor Percentage** – Tracks the proportion of code changes aimed at improving maintainability and structure. A higher percentage suggests a focus on long-term code health.  

These metrics are visualized using a radar chart, allowing for easy identification of quality trends across teams.

![](../static/overview-quality.png)

#### How to derive value

The Quality widget helps in:

* **Evaluating the impact of AI on code quality:** A lower rework percentage and higher refactor percentage suggest AI tools are improving initial code quality.
* **Understanding the trade-off between speed and quality:** If velocity is high but rework is also high, it may indicate rushed development efforts.
* **Identifying patterns across teams:** Teams with low refactor percentages may need to focus on long-term code health.

Considering both rework and refactor together gives a more accurate picture—while low rework suggests stability, a lack of refactoring could lead to technical debt.

#### Detailed view

Clicking **View Details** provides a deeper analysis of how individual metrics influence the overall Quality score. Engineering teams can:

* Examine historical trends to track improvements or regressions in quality.  
* Identify specific teams or projects that may require intervention.  
* Gain insights into how development practices are evolving over time.

### Experience

The **Experience** widget provides a side-by-side comparison of key developer experience metrics between teams using **Coding Assistant vs. not using Coding Assistant**. The categories are configured while setting up the report. The feedback received from the survey is visualized using a radar chart, allowing teams to analyze the distribution of feedback across experience categories. The data is derived by normalizing responses from developer experience surveys.

![](../static/overview-experience.png)

#### How to derive value

The Experience widget helps in:

* **Understand AI adoption impact:** Higher satisfaction and productivity scores indicate positive reception and tangible benefits of AI-assisted development.
* **Benchmarking across teams:** Compare results across different teams or projects to understand where AI integration has the most significant impact.

#### Detailed view

Click on **View Details** to view the Developer Experience dashboard that provides a deeper analysis of how each of the individual DevEx categories influence the overall Experience score.

* If teams using AI tools report lower satisfaction or quality scores, deeper analysis can uncover issues such as irrelevant suggestions, cognitive load, or inefficiencies in AI adoption.
* Understanding score differences between AI and non-AI teams helps pinpoint areas where AI features are underutilized, leading to better onboarding and enablement initiatives.







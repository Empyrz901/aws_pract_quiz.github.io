const DOMAIN4_QUESTIONS = [
  // ===== TASK 4.1: PRICING MODELS (Questions 1-40) =====
  {
    domain: 4,
    task: "4.1",
    q: "Which EC2 pricing model allows you to pay for compute capacity by the hour or second with no long-term commitments?",
    opts: ["Reserved Instances", "On-Demand Instances", "Spot Instances", "Dedicated Hosts"],
    ans: 1,
    explain: "On-Demand Instances let you pay for compute capacity by the hour or second with no long-term commitments or upfront payments."
  },
  {
    domain: 4,
    task: "4.1",
    q: "Which EC2 pricing option offers the highest discount compared to On-Demand pricing but can be interrupted by AWS with a two-minute warning?",
    opts: ["Reserved Instances", "Dedicated Instances", "Spot Instances", "Savings Plans"],
    ans: 2,
    explain: "Spot Instances offer up to 90% discount over On-Demand prices but can be interrupted when AWS needs the capacity back, with a two-minute warning."
  },
  {
    domain: 4,
    task: "4.1",
    q: "A company wants to run a steady-state production database on EC2 for three years. Which pricing option will provide the greatest cost savings?",
    opts: ["On-Demand Instances", "Spot Instances", "3-year All Upfront Reserved Instance", "1-year No Upfront Reserved Instance"],
    ans: 2,
    explain: "A 3-year All Upfront Reserved Instance provides the deepest discount for predictable, long-running workloads because it combines the longest term with the highest upfront commitment."
  },
  {
    domain: 4,
    task: "4.1",
    q: "What is the key difference between Standard Reserved Instances and Convertible Reserved Instances?",
    opts: [
      "Standard RIs cost more than Convertible RIs",
      "Convertible RIs allow you to change the instance family, OS, and tenancy during the term",
      "Standard RIs cannot be shared across accounts in AWS Organizations",
      "Convertible RIs are only available for 3-year terms"
    ],
    ans: 1,
    explain: "Convertible Reserved Instances allow you to exchange them for different instance families, operating systems, and tenancies, offering more flexibility at a slightly lower discount than Standard RIs."
  },
  {
    domain: 4,
    task: "4.1",
    q: "Which payment options are available for Reserved Instances?",
    opts: [
      "All Upfront, Half Upfront, No Upfront",
      "All Upfront, Partial Upfront, No Upfront",
      "Full Payment, Monthly Payment, Deferred Payment",
      "Prepaid, Postpaid, Hybrid"
    ],
    ans: 1,
    explain: "Reserved Instances offer three payment options: All Upfront (largest discount), Partial Upfront (moderate discount), and No Upfront (smallest discount)."
  },
  {
    domain: 4,
    task: "4.1",
    q: "Which Savings Plan type provides the most flexibility by automatically applying to EC2, Fargate, and Lambda usage regardless of region, instance family, or OS?",
    opts: ["EC2 Instance Savings Plan", "Compute Savings Plan", "SageMaker Savings Plan", "Organization Savings Plan"],
    ans: 1,
    explain: "Compute Savings Plans provide the most flexibility, automatically applying to any EC2, Fargate, and Lambda usage regardless of instance family, region, OS, or tenancy."
  },
  {
    domain: 4,
    task: "4.1",
    q: "How does an EC2 Instance Savings Plan differ from a Compute Savings Plan?",
    opts: [
      "EC2 Instance Savings Plans offer a larger discount but are locked to a specific instance family and region",
      "EC2 Instance Savings Plans cover Fargate and Lambda in addition to EC2",
      "Compute Savings Plans require a 3-year commitment while EC2 Instance Savings Plans do not",
      "There is no difference; they are the same product"
    ],
    ans: 0,
    explain: "EC2 Instance Savings Plans offer a deeper discount than Compute Savings Plans but require commitment to a specific instance family in a specific region."
  },
  {
    domain: 4,
    task: "4.1",
    q: "A company needs to meet regulatory requirements that mandate their workloads run on physically isolated servers. Which EC2 option should they choose?",
    opts: ["On-Demand Instances", "Dedicated Hosts", "Spot Instances", "Reserved Instances"],
    ans: 1,
    explain: "Dedicated Hosts provide a physical server fully dedicated to your use, helping meet compliance requirements that mandate physical isolation and server-bound software licensing."
  },
  {
    domain: 4,
    task: "4.1",
    q: "What is the difference between a Dedicated Host and a Dedicated Instance?",
    opts: [
      "Dedicated Hosts are cheaper than Dedicated Instances",
      "Dedicated Instances provide visibility into the physical server's sockets and cores; Dedicated Hosts do not",
      "Dedicated Hosts give you visibility and control over the physical server placement; Dedicated Instances run on hardware dedicated to you but without server visibility",
      "There is no difference; they are the same feature"
    ],
    ans: 2,
    explain: "Dedicated Hosts give visibility into the physical server (sockets, cores, host ID) for licensing compliance, while Dedicated Instances simply ensure hardware is not shared with other AWS accounts."
  },
  {
    domain: 4,
    task: "4.1",
    q: "Which of the following is true about data transfer pricing in AWS?",
    opts: [
      "Data transfer into AWS from the internet is charged per GB",
      "Data transfer out to the internet is always free",
      "Data transfer into AWS from the internet is free",
      "Cross-region data transfer is free within the same AWS account"
    ],
    ans: 2,
    explain: "Data transfer into AWS from the internet (inbound) is free. Outbound data transfer to the internet and cross-region transfers incur charges."
  },
  {
    domain: 4,
    task: "4.1",
    q: "A company is transferring 500 GB of data per month from an EC2 instance in us-east-1 to an EC2 instance in eu-west-1. Which statement is correct?",
    opts: [
      "This transfer is free because both instances are in AWS",
      "This transfer incurs cross-region data transfer charges",
      "Only the sending region is charged",
      "This transfer is free if the instances are in the same VPC"
    ],
    ans: 1,
    explain: "Data transfer between AWS Regions incurs cross-region data transfer charges regardless of the service or account used."
  },
  {
    domain: 4,
    task: "4.1",
    q: "Which AWS Free Tier type provides 750 hours per month of t2.micro or t3.micro EC2 instances for the first 12 months after account creation?",
    opts: ["Always Free", "12 Months Free", "Trials", "Promotional Credits"],
    ans: 1,
    explain: "The 12 Months Free tier provides 750 hours/month of eligible EC2 instances for the first 12 months after you create your AWS account."
  },
  {
    domain: 4,
    task: "4.1",
    q: "Which of the following is an 'Always Free' AWS service offering that does not expire after 12 months?",
    opts: ["750 hours of EC2 t2.micro", "1 million AWS Lambda requests per month", "5 GB of S3 Standard storage", "750 hours of RDS db.t2.micro"],
    ans: 1,
    explain: "AWS Lambda offers 1 million free requests and 400,000 GB-seconds of compute per month as part of the Always Free tier, which never expires."
  },
  {
    domain: 4,
    task: "4.1",
    q: "How is AWS Lambda priced?",
    opts: [
      "Per hour of function availability",
      "Per number of requests and compute duration (GB-seconds)",
      "A flat monthly fee per function deployed",
      "Per the number of lines of code in the function"
    ],
    ans: 1,
    explain: "Lambda pricing is based on the number of requests and the duration of execution measured in GB-seconds (memory allocated multiplied by execution time)."
  },
  {
    domain: 4,
    task: "4.1",
    q: "Which S3 storage class is the most cost-effective for data that is rarely accessed and can tolerate retrieval times of 12 hours?",
    opts: ["S3 Standard", "S3 Standard-IA", "S3 Glacier Deep Archive", "S3 One Zone-IA"],
    ans: 2,
    explain: "S3 Glacier Deep Archive is the lowest-cost storage class, designed for long-term archive data with retrieval times of up to 12 hours."
  },
  {
    domain: 4,
    task: "4.1",
    q: "Which factors determine Amazon S3 pricing? (Choose TWO.)",
    opts: [
      "The number of S3 buckets created",
      "The storage class used and amount of data stored",
      "Data transfer out of S3",
      "The number of IAM policies attached to the bucket",
      "The AWS region where the account was created"
    ],
    ans: [1, 2],
    multi: true,
    explain: "S3 pricing is based on the storage class, amount of data stored, number and type of requests, data transfer out, and optional features like replication."
  },
  {
    domain: 4,
    task: "4.1",
    q: "A startup has unpredictable workloads that may be interrupted. They want the cheapest EC2 pricing. Which option is best?",
    opts: ["On-Demand Instances", "Reserved Instances", "Spot Instances", "Dedicated Hosts"],
    ans: 2,
    explain: "Spot Instances are the cheapest EC2 option (up to 90% off On-Demand) and are ideal for fault-tolerant, flexible workloads that can handle interruptions."
  },
  {
    domain: 4,
    task: "4.1",
    q: "Which pricing model should a company use if they have existing per-socket or per-core software licenses they want to bring to AWS?",
    opts: ["On-Demand Instances", "Spot Instances", "Dedicated Hosts", "Savings Plans"],
    ans: 2,
    explain: "Dedicated Hosts provide visibility into the physical server's sockets and cores, allowing customers to use their existing server-bound software licenses (BYOL)."
  },
  {
    domain: 4,
    task: "4.1",
    q: "What is an On-Demand Capacity Reservation?",
    opts: [
      "A way to reserve compute capacity in a specific Availability Zone with no term commitment",
      "A discounted pricing model that requires a 1-year or 3-year commitment",
      "A feature that automatically scales capacity based on demand",
      "A reservation for data transfer bandwidth"
    ],
    ans: 0,
    explain: "On-Demand Capacity Reservations let you reserve compute capacity in a specific AZ without any term commitment, ensuring capacity is available when you need it."
  },
  {
    domain: 4,
    task: "4.1",
    q: "Which of the following statements about EBS pricing is correct?",
    opts: [
      "EBS volumes are free as long as they are attached to an EC2 instance",
      "EBS pricing is based on the provisioned volume size (GB per month) and volume type",
      "EBS snapshots are always free",
      "EBS volumes are charged only when data is read or written"
    ],
    ans: 1,
    explain: "EBS charges are based on the amount of storage provisioned (in GB per month), the volume type (gp3, io2, etc.), and any additional IOPS or throughput provisioned."
  },
  {
    domain: 4,
    task: "4.1",
    q: "A company runs batch processing jobs that can start and stop at any time. The jobs typically take 2-3 hours. Which EC2 pricing model is most cost-effective?",
    opts: ["On-Demand Instances", "1-year Reserved Instances", "Spot Instances", "Dedicated Hosts"],
    ans: 2,
    explain: "Spot Instances are ideal for batch processing workloads that are flexible about when they run and can tolerate interruptions, offering up to 90% savings."
  },
  {
    domain: 4,
    task: "4.1",
    q: "Which Reserved Instance term lengths are available?",
    opts: ["6 months and 1 year", "1 year and 3 years", "1 year, 2 years, and 3 years", "3 years and 5 years"],
    ans: 1,
    explain: "Reserved Instances are available in 1-year and 3-year term lengths. The 3-year term provides a larger discount."
  },
  {
    domain: 4,
    task: "4.1",
    q: "Data transfer between EC2 instances in the same Availability Zone using private IP addresses is:",
    opts: ["Charged at the standard data transfer rate", "Free", "Charged at half the cross-region rate", "Charged only for outbound traffic"],
    ans: 1,
    explain: "Data transfer between EC2 instances in the same Availability Zone using private IPv4 or IPv6 addresses is free."
  },
  {
    domain: 4,
    task: "4.1",
    q: "Which of the following workloads is LEAST suitable for Spot Instances?",
    opts: [
      "Image rendering",
      "Big data analytics",
      "Mission-critical real-time transaction processing",
      "CI/CD build and test environments"
    ],
    ans: 2,
    explain: "Mission-critical real-time transaction processing cannot tolerate interruptions, making Spot Instances unsuitable. Spot is best for fault-tolerant and flexible workloads."
  },
  {
    domain: 4,
    task: "4.1",
    q: "A company commits to spending $10/hour on compute for 1 year regardless of instance type or region. Which plan type is this?",
    opts: ["EC2 Instance Savings Plan", "Compute Savings Plan", "Standard Reserved Instance", "Convertible Reserved Instance"],
    ans: 1,
    explain: "Compute Savings Plans let you commit to a consistent amount of compute usage ($/hour) for 1 or 3 years, applied flexibly across instance types, regions, OS, and services including EC2, Fargate, and Lambda."
  },
  {
    domain: 4,
    task: "4.1",
    q: "Which of the following AWS Free Tier offerings is classified as a 'Trial'?",
    opts: [
      "750 hours/month of EC2 t2.micro for 12 months",
      "1 million Lambda requests per month forever",
      "Amazon SageMaker free trial for 2 months",
      "25 GB of DynamoDB storage forever"
    ],
    ans: 2,
    explain: "Trial offers are short-term free trials of specific services that start from the first use of the service, such as Amazon SageMaker or Amazon Inspector trials."
  },
  {
    domain: 4,
    task: "4.1",
    q: "A company uses S3 and notices their costs increase as they store more data. Which S3 feature can automatically move objects to cheaper storage classes?",
    opts: ["S3 Versioning", "S3 Lifecycle Policies", "S3 Cross-Region Replication", "S3 Transfer Acceleration"],
    ans: 1,
    explain: "S3 Lifecycle Policies can automatically transition objects to cheaper storage classes (e.g., from Standard to Standard-IA to Glacier) based on age or other criteria."
  },
  {
    domain: 4,
    task: "4.1",
    q: "Which statement about Savings Plans is TRUE?",
    opts: [
      "Savings Plans require choosing a specific instance type upfront",
      "Savings Plans are available for 1-year or 3-year terms",
      "Savings Plans can only be applied to EC2 instances",
      "Savings Plans do not offer any discount compared to On-Demand"
    ],
    ans: 1,
    explain: "Savings Plans are available in 1-year or 3-year terms. You commit to a consistent amount of usage (measured in $/hour) in exchange for discounted pricing."
  },
  {
    domain: 4,
    task: "4.1",
    q: "Which pricing consideration applies specifically to Amazon EBS snapshots?",
    opts: [
      "Snapshots are free for the first 12 months",
      "Snapshots are charged based on the amount of data stored incrementally",
      "Snapshots are charged per snapshot regardless of size",
      "Snapshots are included in EC2 instance pricing"
    ],
    ans: 1,
    explain: "EBS snapshots are incremental backups, and you are charged based on the amount of data actually stored in the snapshot, not the full volume size."
  },
  {
    domain: 4,
    task: "4.1",
    q: "A company's workload requires guaranteed capacity in a specific Availability Zone for a planned product launch, but they do not want a 1-year commitment. What should they use?",
    opts: ["Spot Instances", "On-Demand Capacity Reservations", "Reserved Instances", "Dedicated Instances"],
    ans: 1,
    explain: "On-Demand Capacity Reservations guarantee compute capacity in a specific AZ without any term commitment, ensuring instances can be launched when needed."
  },
  {
    domain: 4,
    task: "4.1",
    q: "Which of the following accurately describes how AWS charges for data transfer? (Choose TWO.)",
    opts: [
      "Data transferred between Availability Zones in the same region incurs a charge",
      "All data transfer within a single Availability Zone is charged",
      "Data transfer from the internet into AWS is charged per GB",
      "Data transfer out to the internet from AWS incurs per-GB charges",
      "Data transfer between all AWS services in the same region is free"
    ],
    ans: [0, 3],
    multi: true,
    explain: "Data transfer between AZs in the same region incurs charges, and data transfer out to the internet is charged per GB. Inbound data from the internet is free."
  },
  {
    domain: 4,
    task: "4.1",
    q: "What happens to a Spot Instance when AWS needs the capacity back?",
    opts: [
      "It is immediately terminated with no warning",
      "AWS sends a two-minute interruption notice before stopping or terminating the instance",
      "The instance is migrated to a different Availability Zone",
      "The instance is automatically converted to an On-Demand Instance"
    ],
    ans: 1,
    explain: "When AWS needs to reclaim Spot capacity, it sends a two-minute interruption notice, giving the instance time to save state or complete short tasks."
  },
  {
    domain: 4,
    task: "4.1",
    q: "Which Savings Plan type is specifically designed for machine learning workloads?",
    opts: ["Compute Savings Plan", "EC2 Instance Savings Plan", "SageMaker Savings Plan", "ML Savings Plan"],
    ans: 2,
    explain: "SageMaker Savings Plans are designed specifically for Amazon SageMaker usage, offering discounts on SageMaker instance usage."
  },
  {
    domain: 4,
    task: "4.1",
    q: "A company has steady-state EC2 usage but wants the ability to change instance types within the same family during the term. Which Reserved Instance type should they choose?",
    opts: ["Standard Reserved Instance with size flexibility", "Convertible Reserved Instance", "Scheduled Reserved Instance", "Zonal Reserved Instance"],
    ans: 0,
    explain: "Standard Reserved Instances offer size flexibility within the same instance family in the same region, allowing you to benefit from the RI discount even if you change instance sizes."
  },
  {
    domain: 4,
    task: "4.1",
    q: "Which AWS service has pricing based on the number of requests and the duration of code execution?",
    opts: ["Amazon EC2", "Amazon S3", "AWS Lambda", "Amazon RDS"],
    ans: 2,
    explain: "AWS Lambda charges based on the number of requests and compute duration measured in GB-seconds, with no charge for idle time."
  },
  {
    domain: 4,
    task: "4.1",
    q: "What is a key pricing benefit of using S3 Intelligent-Tiering?",
    opts: [
      "It provides free storage for the first 50 TB",
      "It automatically moves data between access tiers to optimize costs with no retrieval charges",
      "It eliminates data transfer charges for all S3 operations",
      "It provides the lowest storage cost for all data regardless of access patterns"
    ],
    ans: 1,
    explain: "S3 Intelligent-Tiering automatically moves objects between access tiers based on changing access patterns, optimizing costs without retrieval fees or operational overhead."
  },
  {
    domain: 4,
    task: "4.1",
    q: "Which of the following statements about Reserved Instance payment options is correct?",
    opts: [
      "No Upfront Reserved Instances provide the largest discount",
      "All Upfront Reserved Instances provide the largest discount",
      "Partial Upfront Reserved Instances provide the largest discount",
      "All payment options provide the same discount"
    ],
    ans: 1,
    explain: "All Upfront payment provides the largest discount because you pay for the entire term in advance, reducing AWS's risk."
  },
  {
    domain: 4,
    task: "4.1",
    q: "A company wants to reduce EC2 costs and is flexible about the compute instance family, region, and operating system. Which option offers savings with maximum flexibility?",
    opts: [
      "Standard Reserved Instances",
      "EC2 Instance Savings Plan",
      "Compute Savings Plan",
      "On-Demand Instances with volume discounts"
    ],
    ans: 2,
    explain: "Compute Savings Plans offer the most flexibility, automatically applying discounts across any EC2 instance family, region, OS, tenancy, and even to Fargate and Lambda."
  },
  {
    domain: 4,
    task: "4.1",
    q: "Which of the following is included in the AWS Free Tier for Amazon S3?",
    opts: [
      "100 GB of S3 Standard storage forever",
      "5 GB of S3 Standard storage for 12 months",
      "Unlimited S3 Glacier storage for 12 months",
      "50 GB of S3 Standard-IA storage forever"
    ],
    ans: 1,
    explain: "The AWS Free Tier includes 5 GB of Amazon S3 Standard storage, 20,000 GET requests, and 2,000 PUT requests per month for 12 months."
  },
  {
    domain: 4,
    task: "4.1",
    q: "A company has a Windows-based application using per-socket licensing. They want to use their existing licenses on AWS. Which option helps control license compliance?",
    opts: ["Spot Instances", "Savings Plans", "Dedicated Hosts with AWS License Manager", "On-Demand Instances"],
    ans: 2,
    explain: "Dedicated Hosts combined with AWS License Manager provide visibility into physical sockets and cores, enabling BYOL compliance for per-socket or per-core licensed software."
  },

  // ===== TASK 4.2: BILLING AND COST MANAGEMENT (Questions 41-80) =====
  {
    domain: 4,
    task: "4.2",
    q: "Which AWS tool allows you to set custom budgets and receive alerts when costs or usage exceed defined thresholds?",
    opts: ["AWS Cost Explorer", "AWS Budgets", "AWS Pricing Calculator", "AWS Cost and Usage Report"],
    ans: 1,
    explain: "AWS Budgets lets you set custom cost and usage budgets and sends alerts (via email or SNS) when your actual or forecasted spending exceeds your thresholds."
  },
  {
    domain: 4,
    task: "4.2",
    q: "Which AWS service provides an interactive visualization of your AWS spending patterns over time?",
    opts: ["AWS Budgets", "AWS Cost Explorer", "AWS Billing Console", "AWS Pricing Calculator"],
    ans: 1,
    explain: "AWS Cost Explorer provides interactive charts and graphs to visualize, understand, and manage your AWS costs and usage over time, including forecasting future costs."
  },
  {
    domain: 4,
    task: "4.2",
    q: "A solutions architect wants to estimate the cost of a new architecture before deploying it. Which tool should they use?",
    opts: ["AWS Cost Explorer", "AWS Budgets", "AWS Pricing Calculator", "AWS Cost and Usage Report"],
    ans: 2,
    explain: "AWS Pricing Calculator lets you explore AWS services and estimate the cost of your use cases before deploying any resources."
  },
  {
    domain: 4,
    task: "4.2",
    q: "What is a benefit of consolidated billing in AWS Organizations?",
    opts: [
      "Each account gets its own separate volume discounts",
      "Usage across all accounts is aggregated for potential volume pricing discounts",
      "Consolidated billing eliminates all data transfer charges",
      "It provides free AWS support for all member accounts"
    ],
    ans: 1,
    explain: "Consolidated billing in AWS Organizations aggregates usage across all member accounts, which can qualify the organization for volume pricing discounts."
  },
  {
    domain: 4,
    task: "4.2",
    q: "Which type of cost allocation tag is automatically applied by AWS to track costs?",
    opts: ["User-defined tags", "AWS-generated tags", "Custom billing tags", "Resource group tags"],
    ans: 1,
    explain: "AWS-generated cost allocation tags (e.g., aws:createdBy) are automatically created and applied by AWS to track which resources were created by which IAM user or role."
  },
  {
    domain: 4,
    task: "4.2",
    q: "What is the purpose of the AWS Cost and Usage Report (CUR)?",
    opts: [
      "To provide a high-level summary of monthly charges",
      "To provide the most comprehensive and detailed set of cost and usage data available",
      "To generate estimates for future AWS spending",
      "To automatically optimize costs by shutting down unused resources"
    ],
    ans: 1,
    explain: "The AWS Cost and Usage Report provides the most detailed and comprehensive cost and usage data, including hourly line items for each service and resource."
  },
  {
    domain: 4,
    task: "4.2",
    q: "A company has 10 AWS accounts under AWS Organizations. How does consolidated billing affect Reserved Instance sharing?",
    opts: [
      "Reserved Instances cannot be shared across accounts",
      "Reserved Instances purchased in one account can be applied to matching usage in other accounts within the same organization",
      "Each account must purchase its own Reserved Instances",
      "Reserved Instances are automatically converted to Savings Plans in Organizations"
    ],
    ans: 1,
    explain: "With consolidated billing in AWS Organizations, Reserved Instance discounts are automatically shared across all accounts in the organization when usage matches the RI attributes."
  },
  {
    domain: 4,
    task: "4.2",
    q: "Which AWS feature in the Billing Console helps you track whether you are staying within the AWS Free Tier limits?",
    opts: ["AWS Budgets", "AWS Free Tier usage alerts", "AWS Cost Explorer", "AWS Trusted Advisor"],
    ans: 1,
    explain: "The AWS Billing Console provides Free Tier usage alerts that notify you when your usage approaches or exceeds Free Tier limits."
  },
  {
    domain: 4,
    task: "4.2",
    q: "Which tool should you use to create a billing alarm that triggers when your estimated charges exceed a specific amount?",
    opts: ["AWS Budgets", "Amazon CloudWatch billing alarms", "AWS Cost Explorer", "AWS Config"],
    ans: 1,
    explain: "Amazon CloudWatch billing alarms can be configured to trigger notifications when your estimated charges exceed a specified threshold."
  },
  {
    domain: 4,
    task: "4.2",
    q: "What do Service Control Policies (SCPs) in AWS Organizations allow you to do?",
    opts: [
      "Set maximum spending limits for member accounts",
      "Control which AWS services and actions are allowed or denied for member accounts",
      "Automatically tag resources in all member accounts",
      "Share Reserved Instances across member accounts"
    ],
    ans: 1,
    explain: "SCPs centrally control the maximum available permissions for member accounts in an organization, restricting which services and actions can be used."
  },
  {
    domain: 4,
    task: "4.2",
    q: "A team wants to track costs by department and project. Which approach should they use?",
    opts: [
      "Create separate AWS accounts for each department",
      "Use cost allocation tags to label resources with department and project information",
      "Use AWS Config rules to enforce department naming",
      "Use AWS CloudTrail to track spending per department"
    ],
    ans: 1,
    explain: "Cost allocation tags (user-defined) allow you to categorize and track AWS costs by applying metadata such as department, project, or environment to resources."
  },
  {
    domain: 4,
    task: "4.2",
    q: "Which AWS tool can forecast your future AWS costs based on historical usage patterns?",
    opts: ["AWS Budgets", "AWS Cost Explorer", "AWS Pricing Calculator", "AWS Cost and Usage Report"],
    ans: 1,
    explain: "AWS Cost Explorer includes a forecasting feature that uses historical usage data to predict future costs for up to 12 months."
  },
  {
    domain: 4,
    task: "4.2",
    q: "How can a company benefit from volume discounts on AWS?",
    opts: [
      "By prepaying for all services annually",
      "By increasing usage, as some services offer tiered pricing where per-unit cost decreases with higher usage",
      "By using only On-Demand pricing for all services",
      "By purchasing Dedicated Hosts for all workloads"
    ],
    ans: 1,
    explain: "Many AWS services (such as S3 and data transfer) use tiered pricing where the per-unit cost decreases as usage increases, providing automatic volume discounts."
  },
  {
    domain: 4,
    task: "4.2",
    q: "Which of the following can AWS Budgets track? (Choose TWO.)",
    opts: [
      "Cost budgets based on actual and forecasted spending",
      "Usage budgets for specific AWS services",
      "Code quality budgets for Lambda functions",
      "Network latency budgets for VPC connections",
      "CPU utilization budgets for EC2 instances"
    ],
    ans: [0, 1],
    multi: true,
    explain: "AWS Budgets can track cost budgets (actual and forecasted spending), usage budgets (service-specific usage amounts), reservation budgets, and Savings Plan budgets."
  },
  {
    domain: 4,
    task: "4.2",
    q: "Where can you find a summary of your current month's charges and a breakdown by service in AWS?",
    opts: ["AWS Cost Explorer", "AWS Billing Console (Bills page)", "AWS Pricing Calculator", "AWS Trusted Advisor"],
    ans: 1,
    explain: "The AWS Billing Console Bills page provides a summary of your current month's charges with a breakdown by service."
  },
  {
    domain: 4,
    task: "4.2",
    q: "What must you do before user-defined cost allocation tags appear in cost reports?",
    opts: [
      "Apply the tags and wait 24 hours",
      "Activate the tags in the AWS Billing Console",
      "Contact AWS Support to enable tagging",
      "Purchase a Business or Enterprise support plan"
    ],
    ans: 1,
    explain: "User-defined cost allocation tags must be activated in the AWS Billing Console before they appear in your cost allocation reports and Cost Explorer."
  },
  {
    domain: 4,
    task: "4.2",
    q: "A company wants to send the AWS Cost and Usage Report data to Amazon Athena for analysis. Where is the CUR data delivered?",
    opts: ["Amazon RDS", "Amazon S3", "Amazon DynamoDB", "AWS CloudTrail"],
    ans: 1,
    explain: "The AWS Cost and Usage Report is delivered to an Amazon S3 bucket that you specify, from where it can be queried using Athena, Redshift, or QuickSight."
  },
  {
    domain: 4,
    task: "4.2",
    q: "Which statement about AWS Organizations and consolidated billing is correct?",
    opts: [
      "Each member account receives a separate invoice",
      "The management account pays the combined charges for all member accounts with a single bill",
      "Consolidated billing requires an Enterprise Support plan",
      "Member accounts cannot see their own usage details"
    ],
    ans: 1,
    explain: "With consolidated billing, the management (payer) account receives a single bill that covers the charges of all member accounts in the organization."
  },
  {
    domain: 4,
    task: "4.2",
    q: "Which feature of AWS Cost Explorer helps identify underutilized Reserved Instances?",
    opts: [
      "Cost forecasting",
      "RI utilization and coverage reports",
      "Savings Plans recommendations",
      "Tag filtering"
    ],
    ans: 1,
    explain: "AWS Cost Explorer provides Reserved Instance utilization and coverage reports that show how well your RIs are being used and where you have gaps in coverage."
  },
  {
    domain: 4,
    task: "4.2",
    q: "A finance team wants to receive an email notification when their monthly AWS spending is forecasted to exceed $5,000. Which service should they configure?",
    opts: ["AWS Cost Explorer", "AWS Budgets", "Amazon CloudWatch Logs", "AWS Config"],
    ans: 1,
    explain: "AWS Budgets can send alert notifications via email or SNS when actual or forecasted spending exceeds defined budget thresholds."
  },
  {
    domain: 4,
    task: "4.2",
    q: "How does AWS Organizations help manage costs for multiple AWS accounts? (Choose TWO.)",
    opts: [
      "It provides consolidated billing across all member accounts",
      "It automatically reduces prices for all services by 10%",
      "It aggregates usage across accounts for volume pricing discounts",
      "It provides free Reserved Instances to all member accounts",
      "It eliminates the need for cost allocation tags"
    ],
    ans: [0, 2],
    multi: true,
    explain: "AWS Organizations provides consolidated billing (single bill for all accounts) and aggregates usage across accounts to qualify for volume pricing discounts on services like S3 and data transfer."
  },
  {
    domain: 4,
    task: "4.2",
    q: "Which AWS tool is best suited for generating a detailed, line-item report of every AWS charge for integration with third-party billing systems?",
    opts: ["AWS Cost Explorer", "AWS Budgets", "AWS Cost and Usage Report", "AWS Pricing Calculator"],
    ans: 2,
    explain: "The AWS Cost and Usage Report provides the most granular, line-item billing data that can be exported to S3 and integrated with third-party billing or analytics tools."
  },
  {
    domain: 4,
    task: "4.2",
    q: "What is the maximum number of budgets you can create with AWS Budgets for free?",
    opts: ["1 budget", "2 budgets", "5 budgets", "Unlimited budgets"],
    ans: 1,
    explain: "AWS Budgets allows you to create up to 2 budgets for free. Additional budgets incur a charge per budget per month."
  },
  {
    domain: 4,
    task: "4.2",
    q: "A company wants to estimate the costs of migrating an on-premises workload to AWS. Which tool should they use?",
    opts: ["AWS Cost Explorer", "AWS Pricing Calculator", "AWS Migration Hub", "AWS Budgets"],
    ans: 1,
    explain: "AWS Pricing Calculator allows you to model and estimate the cost of running workloads on AWS before any migration, helping with planning and budgeting."
  },
  {
    domain: 4,
    task: "4.2",
    q: "Which of the following is a benefit of using cost allocation tags?",
    opts: [
      "They automatically reduce the cost of tagged resources",
      "They enable you to categorize costs and generate reports broken down by business categories",
      "They prevent unauthorized users from accessing resources",
      "They automatically apply Reserved Instance discounts to tagged resources"
    ],
    ans: 1,
    explain: "Cost allocation tags let you categorize and track AWS costs by custom categories (department, project, environment), enabling detailed cost breakdowns in billing reports."
  },
  {
    domain: 4,
    task: "4.2",
    q: "Which action in the AWS Billing Console allows you to prevent accidental charges from exceeding your expectations?",
    opts: [
      "Setting up a payment method",
      "Configuring billing preferences and enabling billing alerts",
      "Disabling all unused AWS services",
      "Deleting all IAM users except the root account"
    ],
    ans: 1,
    explain: "Configuring billing preferences to receive billing alerts and setting up CloudWatch billing alarms or AWS Budgets helps you monitor spending and prevent unexpected charges."
  },
  {
    domain: 4,
    task: "4.2",
    q: "Which of the following describes how the S3 volume discount model works with consolidated billing?",
    opts: [
      "Each account gets its own volume discount based on its individual usage",
      "Total S3 usage across all accounts in the organization is aggregated, potentially qualifying for a lower price tier",
      "Volume discounts only apply to the management account",
      "Volume discounts are not available with consolidated billing"
    ],
    ans: 1,
    explain: "Consolidated billing aggregates S3 usage across all organization accounts, which can push the total into a higher volume tier with lower per-GB pricing."
  },
  {
    domain: 4,
    task: "4.2",
    q: "What type of AWS Budget would you create to ensure Reserved Instance utilization stays above 80%?",
    opts: ["Cost budget", "Usage budget", "Reservation budget", "Savings Plans budget"],
    ans: 2,
    explain: "A Reservation budget in AWS Budgets tracks RI utilization and coverage, alerting you if your RI utilization falls below a target threshold."
  },
  {
    domain: 4,
    task: "4.2",
    q: "Which AWS Cost Explorer feature helps you identify which Savings Plan would best reduce your costs?",
    opts: [
      "Cost anomaly detection",
      "Savings Plans recommendations",
      "Resource optimization",
      "Monthly cost breakdown"
    ],
    ans: 1,
    explain: "AWS Cost Explorer provides Savings Plans recommendations that analyze your historical usage and suggest the optimal Savings Plan commitment to reduce costs."
  },
  {
    domain: 4,
    task: "4.2",
    q: "A company has tagged all of its resources with 'Environment: Production' and 'Environment: Development'. After activating these tags, where can they view the cost breakdown by environment?",
    opts: [
      "AWS CloudTrail logs",
      "AWS Cost Explorer using tag filters",
      "Amazon CloudWatch metrics",
      "AWS Config resource inventory"
    ],
    ans: 1,
    explain: "Once cost allocation tags are activated, you can use them as filters in AWS Cost Explorer to view costs broken down by tag values such as environment."
  },
  {
    domain: 4,
    task: "4.2",
    q: "What is the primary purpose of the AWS Billing Console?",
    opts: [
      "To launch and manage AWS resources",
      "To view and manage your AWS charges, payments, and billing information",
      "To configure network security groups",
      "To deploy CloudFormation templates"
    ],
    ans: 1,
    explain: "The AWS Billing Console is the central hub for viewing your AWS charges, managing payment methods, setting up billing alerts, and accessing cost management tools."
  },
  {
    domain: 4,
    task: "4.2",
    q: "Which of the following best describes an AWS-generated cost allocation tag?",
    opts: [
      "A tag that users manually create and apply to resources",
      "A tag that AWS automatically creates, such as aws:createdBy, to help track resource creators",
      "A tag that is applied by AWS Config rules",
      "A tag that is only visible in AWS CloudTrail"
    ],
    ans: 1,
    explain: "AWS-generated cost allocation tags like aws:createdBy are automatically created by AWS and can be activated in the Billing Console to appear in cost reports."
  },
  {
    domain: 4,
    task: "4.2",
    q: "Which AWS service can automatically detect unusual spending patterns and alert you?",
    opts: ["AWS Budgets", "AWS Cost Anomaly Detection", "AWS Trusted Advisor", "AWS Config"],
    ans: 1,
    explain: "AWS Cost Anomaly Detection uses machine learning to continuously monitor your cost and usage patterns and alerts you when it detects anomalous spending."
  },
  {
    domain: 4,
    task: "4.2",
    q: "How does the AWS Cost and Usage Report differ from Cost Explorer?",
    opts: [
      "CUR provides raw, granular data delivered to S3, while Cost Explorer provides interactive visual analysis in the console",
      "They are identical in functionality",
      "Cost Explorer is only available to Enterprise support customers",
      "CUR only shows summary data, while Cost Explorer shows line-item details"
    ],
    ans: 0,
    explain: "The CUR delivers the most detailed raw billing data to S3 for custom analysis, while Cost Explorer provides an interactive console-based visualization of your costs."
  },
  {
    domain: 4,
    task: "4.2",
    q: "A company uses multiple AWS accounts for different business units. Which approach best enables centralized billing while maintaining account-level visibility? (Choose TWO.)",
    opts: [
      "Use AWS Organizations with consolidated billing",
      "Create a single AWS account for all business units",
      "Use cost allocation tags to track spending per business unit",
      "Use separate payment methods for each account",
      "Disable all IAM access to the billing console"
    ],
    ans: [0, 2],
    multi: true,
    explain: "AWS Organizations with consolidated billing provides a single bill, while cost allocation tags enable tracking and reporting costs per business unit across accounts."
  },
  {
    domain: 4,
    task: "4.2",
    q: "Which of the following actions can AWS Budgets perform when a threshold is breached? (Choose TWO.)",
    opts: [
      "Send an email notification to specified recipients",
      "Automatically terminate all running EC2 instances",
      "Trigger an AWS Budgets action (e.g., apply an IAM policy or SCP)",
      "Automatically purchase Reserved Instances",
      "Delete S3 buckets to reduce costs"
    ],
    ans: [0, 2],
    multi: true,
    explain: "AWS Budgets can send email/SNS notifications and trigger automated actions like applying IAM policies or SCPs when budget thresholds are exceeded."
  },
  {
    domain: 4,
    task: "4.2",
    q: "Which AWS service allows you to view your charges grouped by linked account, service, or tag in a graphical format?",
    opts: ["AWS Cost and Usage Report", "AWS Cost Explorer", "AWS Pricing Calculator", "AWS CloudTrail"],
    ans: 1,
    explain: "AWS Cost Explorer provides graphical views of your costs that can be grouped and filtered by linked account, service, tag, and other dimensions."
  },
  {
    domain: 4,
    task: "4.2",
    q: "A company wants to restrict member accounts in AWS Organizations from launching expensive instance types. Which feature should they use?",
    opts: ["AWS Budgets actions", "Service Control Policies (SCPs)", "Cost allocation tags", "AWS Config rules"],
    ans: 1,
    explain: "SCPs can restrict which instance types member accounts are allowed to launch, providing centralized governance over resource usage and costs."
  },
  {
    domain: 4,
    task: "4.2",
    q: "Which of the following best describes how AWS Pricing Calculator works?",
    opts: [
      "It analyzes your current AWS bill and suggests savings",
      "It lets you model AWS solutions and estimate costs by configuring services, regions, and usage parameters",
      "It automatically applies discounts to your AWS account",
      "It compares pricing across different cloud providers"
    ],
    ans: 1,
    explain: "AWS Pricing Calculator lets you create cost estimates by selecting services, configuring parameters like region, instance type, and usage levels, and viewing itemized monthly costs."
  },

  // ===== TASK 4.3: TECHNICAL RESOURCES AND SUPPORT (Questions 81-120) =====
  {
    domain: 4,
    task: "4.3",
    q: "Which AWS Support plan provides access to a Technical Account Manager (TAM)?",
    opts: ["Basic", "Developer", "Business", "Enterprise"],
    ans: 3,
    explain: "Only the Enterprise Support plan provides a designated Technical Account Manager (TAM) who provides proactive guidance and advocacy."
  },
  {
    domain: 4,
    task: "4.3",
    q: "Which AWS Support plans provide 24/7 access to Cloud Support Engineers via phone, chat, and email? (Choose TWO.)",
    opts: ["Basic", "Developer", "Business", "Enterprise On-Ramp", "Enterprise"],
    ans: [2, 4],
    multi: true,
    explain: "Business and Enterprise Support plans provide 24/7 access to Cloud Support Engineers via phone, chat, and email for technical support."
  },
  {
    domain: 4,
    task: "4.3",
    q: "What is the fastest response time available for business-critical system down issues?",
    opts: [
      "1 hour (Business plan)",
      "15 minutes (Enterprise plan)",
      "30 minutes (Enterprise On-Ramp plan)",
      "4 hours (Developer plan)"
    ],
    ans: 1,
    explain: "The Enterprise Support plan offers a 15-minute response time for business/mission-critical system down cases, the fastest available."
  },
  {
    domain: 4,
    task: "4.3",
    q: "Which AWS Support plan is free and available to all AWS customers?",
    opts: ["Developer", "Basic", "Business", "Enterprise On-Ramp"],
    ans: 1,
    explain: "The Basic Support plan is free for all AWS customers and includes access to documentation, whitepapers, and limited Trusted Advisor checks."
  },
  {
    domain: 4,
    task: "4.3",
    q: "Which AWS service provides personalized recommendations for cost optimization, performance, security, fault tolerance, and service limits?",
    opts: ["AWS Config", "AWS Trusted Advisor", "Amazon Inspector", "AWS Well-Architected Tool"],
    ans: 1,
    explain: "AWS Trusted Advisor inspects your AWS environment and provides recommendations across five categories: cost optimization, performance, security, fault tolerance, and service limits."
  },
  {
    domain: 4,
    task: "4.3",
    q: "How many Trusted Advisor checks are available with the Basic and Developer Support plans?",
    opts: [
      "All checks are available",
      "A limited set of core checks (7 checks)",
      "No checks are available",
      "Only security-related checks"
    ],
    ans: 1,
    explain: "Basic and Developer Support plans include a limited set of core Trusted Advisor checks, primarily focused on security and service limits."
  },
  {
    domain: 4,
    task: "4.3",
    q: "Which AWS Support plan is required to get access to the full set of Trusted Advisor checks?",
    opts: ["Basic", "Developer", "Business", "Enterprise only"],
    ans: 2,
    explain: "Business, Enterprise On-Ramp, and Enterprise Support plans provide access to the full set of Trusted Advisor checks across all five categories."
  },
  {
    domain: 4,
    task: "4.3",
    q: "What is the AWS Health Dashboard used for?",
    opts: [
      "Monitoring the health of EC2 instances using custom metrics",
      "Providing personalized view of the health of AWS services and any events that may affect your account",
      "Tracking the physical health of data center hardware",
      "Monitoring the health of on-premises servers"
    ],
    ans: 1,
    explain: "The AWS Health Dashboard provides a personalized view of the health of AWS services that are relevant to your account and any ongoing events that may affect your resources."
  },
  {
    domain: 4,
    task: "4.3",
    q: "Which AWS resource is a community-driven Q&A service where users can find answers and get expert guidance?",
    opts: ["AWS Knowledge Center", "AWS re:Post", "AWS Documentation", "AWS Whitepapers"],
    ans: 1,
    explain: "AWS re:Post is a community-driven Q&A service (replacing AWS Forums) where AWS users can ask questions, share knowledge, and get guidance from experts."
  },
  {
    domain: 4,
    task: "4.3",
    q: "Which resource provides a curated collection of frequently asked questions and answers about AWS services?",
    opts: ["AWS re:Post", "AWS Knowledge Center", "AWS Whitepapers", "AWS Training and Certification"],
    ans: 1,
    explain: "The AWS Knowledge Center is a collection of frequently asked questions and articles that address common customer queries about AWS services."
  },
  {
    domain: 4,
    task: "4.3",
    q: "What is the AWS Partner Network (APN)?",
    opts: [
      "A VPN service for connecting on-premises networks to AWS",
      "A global community of partners that leverage AWS to build solutions and services for customers",
      "A network of AWS data centers around the world",
      "A private network connecting all AWS regions"
    ],
    ans: 1,
    explain: "The AWS Partner Network (APN) is a global community of AWS partners (consulting and technology partners) who help customers design, build, and manage workloads on AWS."
  },
  {
    domain: 4,
    task: "4.3",
    q: "What is AWS Marketplace?",
    opts: [
      "A physical store for purchasing AWS hardware",
      "A digital catalog where customers can find, buy, and deploy third-party software that runs on AWS",
      "A service for selling products on Amazon.com",
      "A tool for comparing AWS pricing with other cloud providers"
    ],
    ans: 1,
    explain: "AWS Marketplace is a curated digital catalog of third-party software, data, and services that you can find, test, buy, and deploy on AWS."
  },
  {
    domain: 4,
    task: "4.3",
    q: "Which team should you contact to report suspected abuse of AWS resources, such as spam or illegal content hosted on AWS?",
    opts: ["AWS Support", "AWS Trust and Safety team", "AWS Professional Services", "AWS Security team"],
    ans: 1,
    explain: "The AWS Trust and Safety team handles reports of AWS resources being used for abusive or illegal purposes, such as spam, port scanning, or hosting illegal content."
  },
  {
    domain: 4,
    task: "4.3",
    q: "What is AWS Professional Services?",
    opts: [
      "A team that manages your AWS infrastructure for you",
      "A global team of experts that helps customers achieve desired outcomes through cloud adoption using the AWS CAF",
      "A certification program for AWS engineers",
      "A service that automatically optimizes your AWS architecture"
    ],
    ans: 1,
    explain: "AWS Professional Services is a global team of experts that works with customers to accelerate cloud adoption, using frameworks like the AWS Cloud Adoption Framework (CAF)."
  },
  {
    domain: 4,
    task: "4.3",
    q: "Which AWS Support plan offers a response time of less than 1 hour for production system impaired cases?",
    opts: ["Basic", "Developer", "Business", "Enterprise only"],
    ans: 2,
    explain: "Business, Enterprise On-Ramp, and Enterprise Support plans offer a less than 1-hour response time for production system impaired cases."
  },
  {
    domain: 4,
    task: "4.3",
    q: "What is AWS IQ?",
    opts: [
      "An AI-powered assistant for answering AWS questions",
      "A service that connects customers with AWS-certified third-party experts for on-demand project work",
      "An intelligence service for threat detection",
      "A quiz platform for AWS certification preparation"
    ],
    ans: 1,
    explain: "AWS IQ connects customers with AWS Certified third-party experts for on-demand help with AWS projects, from architecture reviews to implementation."
  },
  {
    domain: 4,
    task: "4.3",
    q: "Which AWS Support plan provides access to the AWS Health API for programmatic access to health events?",
    opts: ["Basic", "Developer", "Business", "Enterprise only"],
    ans: 2,
    explain: "Business, Enterprise On-Ramp, and Enterprise Support plans provide access to the AWS Health API for programmatic integration with your monitoring tools."
  },
  {
    domain: 4,
    task: "4.3",
    q: "A small startup is just beginning to use AWS and needs technical support during business hours for non-production workloads. Which Support plan is most appropriate?",
    opts: ["Basic", "Developer", "Business", "Enterprise"],
    ans: 1,
    explain: "The Developer Support plan provides email access to Cloud Support Associates during business hours, suitable for development and testing workloads."
  },
  {
    domain: 4,
    task: "4.3",
    q: "What does the Enterprise On-Ramp Support plan offer that the Business plan does not?",
    opts: [
      "24/7 phone and chat support",
      "Full Trusted Advisor checks",
      "A pool of Technical Account Managers (TAMs) for guidance",
      "Access to AWS Documentation"
    ],
    ans: 2,
    explain: "Enterprise On-Ramp provides access to a pool of TAMs (not a designated one), offering proactive guidance that the Business plan does not include."
  },
  {
    domain: 4,
    task: "4.3",
    q: "Which of the following are categories of AWS Trusted Advisor recommendations? (Choose TWO.)",
    opts: [
      "Cost optimization",
      "Database performance",
      "Fault tolerance",
      "Machine learning accuracy",
      "Container orchestration"
    ],
    ans: [0, 2],
    multi: true,
    explain: "Trusted Advisor provides recommendations across five categories: cost optimization, performance, security, fault tolerance, and service limits."
  },
  {
    domain: 4,
    task: "4.3",
    q: "Which AWS Support plan is recommended for companies running production workloads on AWS and needing 24/7 technical support?",
    opts: ["Basic", "Developer", "Business", "Enterprise only"],
    ans: 2,
    explain: "The Business Support plan is recommended for production workloads, providing 24/7 access to Cloud Support Engineers via phone, chat, and email."
  },
  {
    domain: 4,
    task: "4.3",
    q: "What is the response time for general guidance cases on the Developer Support plan?",
    opts: ["12 hours", "24 hours", "1 hour", "15 minutes"],
    ans: 1,
    explain: "The Developer Support plan provides a response time of less than 24 hours for general guidance cases during business hours."
  },
  {
    domain: 4,
    task: "4.3",
    q: "Which AWS resource provides in-depth technical documents covering topics such as architecture best practices, security, and migration?",
    opts: ["AWS re:Post", "AWS Knowledge Center", "AWS Whitepapers and Guides", "AWS Trusted Advisor"],
    ans: 2,
    explain: "AWS Whitepapers and Guides are authoritative documents that cover in-depth technical topics, best practices, architecture patterns, and migration strategies."
  },
  {
    domain: 4,
    task: "4.3",
    q: "A large enterprise needs a designated point of contact at AWS who understands their environment and can coordinate across AWS teams. Which support feature fulfills this need?",
    opts: [
      "AWS Solutions Architect",
      "Technical Account Manager (TAM)",
      "AWS Concierge Support team",
      "Cloud Support Engineer"
    ],
    ans: 1,
    explain: "A TAM is a designated technical point of contact who provides proactive guidance, coordinates access to programs and experts, and advocates for the customer within AWS."
  },
  {
    domain: 4,
    task: "4.3",
    q: "What level of Trusted Advisor checks are available with the Basic Support plan?",
    opts: [
      "Full access to all Trusted Advisor checks",
      "Core security checks and service limit checks only",
      "No access to Trusted Advisor",
      "Performance and cost optimization checks only"
    ],
    ans: 1,
    explain: "The Basic Support plan includes a limited set of core Trusted Advisor checks focused on security best practices and service limits."
  },
  {
    domain: 4,
    task: "4.3",
    q: "Which of the following describes the AWS Concierge Support team?",
    opts: [
      "A team that manages your technical infrastructure",
      "Senior billing and account specialists available to Enterprise Support customers for billing and account inquiries",
      "A team that provides architecture reviews",
      "A 24/7 technical support team for all customers"
    ],
    ans: 1,
    explain: "The Concierge Support team consists of senior specialists who help Enterprise Support customers with billing, account, and access inquiries."
  },
  {
    domain: 4,
    task: "4.3",
    q: "A developer needs to programmatically receive notifications about AWS service events that affect their resources. Which feature should they use?",
    opts: ["AWS CloudTrail", "AWS Health API", "Amazon CloudWatch Events", "AWS Config"],
    ans: 1,
    explain: "The AWS Health API provides programmatic access to health events that affect your AWS resources, enabling automated responses and integration with monitoring tools."
  },
  {
    domain: 4,
    task: "4.3",
    q: "Which AWS program helps customers get guidance from AWS Solutions Architects during the early stages of cloud adoption?",
    opts: [
      "AWS Training and Certification",
      "AWS Professional Services",
      "AWS Activate (for startups)",
      "AWS Well-Architected Review"
    ],
    ans: 1,
    explain: "AWS Professional Services, along with Solutions Architects, provides expert guidance to help customers plan and execute their cloud adoption journey."
  },
  {
    domain: 4,
    task: "4.3",
    q: "Which of the following are available to ALL AWS customers at no additional cost? (Choose TWO.)",
    opts: [
      "AWS Documentation and Whitepapers",
      "24/7 phone support",
      "AWS re:Post community forums",
      "Technical Account Manager",
      "Full Trusted Advisor checks"
    ],
    ans: [0, 2],
    multi: true,
    explain: "AWS Documentation, Whitepapers, and re:Post community forums are available to all customers regardless of their support plan, at no additional cost."
  },
  {
    domain: 4,
    task: "4.3",
    q: "A company is looking for a third-party solution to enhance their AWS-based application with pre-built machine learning capabilities. Where should they look?",
    opts: ["AWS Trusted Advisor", "AWS Marketplace", "AWS Knowledge Center", "AWS Config"],
    ans: 1,
    explain: "AWS Marketplace is a digital catalog offering thousands of third-party software products, including machine learning solutions, that can be deployed on AWS."
  },
  {
    domain: 4,
    task: "4.3",
    q: "What is the response time for a business-critical system down case on the Enterprise On-Ramp Support plan?",
    opts: ["15 minutes", "30 minutes", "1 hour", "4 hours"],
    ans: 1,
    explain: "Enterprise On-Ramp offers a 30-minute response time for business-critical system down cases, compared to 15 minutes for Enterprise."
  },
  {
    domain: 4,
    task: "4.3",
    q: "Which AWS Support plan provides access to Infrastructure Event Management to help plan for large-scale events like product launches?",
    opts: ["Basic", "Developer", "Business (for additional fee)", "Developer (for additional fee)"],
    ans: 2,
    explain: "Business Support includes Infrastructure Event Management for an additional fee, while Enterprise and Enterprise On-Ramp include it at no extra charge."
  },
  {
    domain: 4,
    task: "4.3",
    q: "A customer discovers that an AWS-hosted website is sending phishing emails. Who should they report this to?",
    opts: ["AWS Support Center", "AWS Trust and Safety team", "Amazon customer service", "AWS Security Hub"],
    ans: 1,
    explain: "The AWS Trust and Safety team handles reports of abusive activity from AWS resources, including phishing, spam, malware, and other policy violations."
  },
  {
    domain: 4,
    task: "4.3",
    q: "Which of the following describes the Developer Support plan? (Choose TWO.)",
    opts: [
      "24/7 phone and chat support",
      "Email access to Cloud Support Associates during business hours",
      "General guidance response time of less than 24 hours",
      "Includes a designated Technical Account Manager",
      "Provides Infrastructure Event Management at no additional cost"
    ],
    ans: [1, 2],
    multi: true,
    explain: "Developer Support provides business-hours email access to Cloud Support Associates with general guidance responses in less than 24 hours and system impaired responses in less than 12 hours."
  },
  {
    domain: 4,
    task: "4.3",
    q: "What is the primary purpose of AWS Training and Certification?",
    opts: [
      "To manage AWS billing and cost optimization",
      "To help individuals build and validate cloud skills through courses and certification exams",
      "To provide technical support for production workloads",
      "To deploy AWS resources automatically"
    ],
    ans: 1,
    explain: "AWS Training and Certification provides courses, labs, and certification exams to help individuals build, validate, and demonstrate cloud expertise."
  },
  {
    domain: 4,
    task: "4.3",
    q: "Which Trusted Advisor check is available to Basic Support plan customers?",
    opts: [
      "Low utilization EC2 instances",
      "S3 bucket permissions (public access)",
      "Underutilized EBS volumes",
      "Idle load balancers"
    ],
    ans: 1,
    explain: "S3 bucket permissions check (identifying publicly accessible buckets) is one of the core security checks available to all customers, including Basic Support."
  },
  {
    domain: 4,
    task: "4.3",
    q: "A company wants to engage an AWS consulting partner to help design and implement their cloud architecture. Where should they find qualified partners?",
    opts: ["AWS Marketplace", "AWS Partner Network (APN)", "AWS re:Post", "AWS Training and Certification"],
    ans: 1,
    explain: "The AWS Partner Network includes consulting partners who specialize in helping customers design, architect, build, migrate, and manage workloads on AWS."
  },
  {
    domain: 4,
    task: "4.3",
    q: "How does the AWS Health Dashboard differ from the AWS Health API?",
    opts: [
      "The Dashboard shows public AWS service events while the API only shows account-specific events",
      "The Dashboard provides a visual console view while the API enables programmatic access to health data",
      "They are the same feature with different names",
      "The API is available to all customers while the Dashboard requires Business Support"
    ],
    ans: 1,
    explain: "The AWS Health Dashboard provides a visual console-based view of service health, while the AWS Health API provides programmatic access for automation and integration."
  },
  {
    domain: 4,
    task: "4.3",
    q: "Which AWS Support plan offers the lowest-cost option that includes 24/7 phone, chat, and email support?",
    opts: ["Basic", "Developer", "Business", "Enterprise On-Ramp"],
    ans: 2,
    explain: "Business is the lowest-cost support plan that includes 24/7 access to Cloud Support Engineers via phone, chat, and email."
  },
  {
    domain: 4,
    task: "4.3",
    q: "A company running mission-critical workloads needs the fastest possible response time and a dedicated TAM. Which Support plan should they choose?",
    opts: ["Business", "Enterprise On-Ramp", "Enterprise", "Developer"],
    ans: 2,
    explain: "Enterprise Support offers a 15-minute response time for critical issues and includes a designated TAM, making it ideal for mission-critical operations."
  },
  {
    domain: 4,
    task: "4.3",
    q: "Which of the following best describes what AWS Solutions Architects do?",
    opts: [
      "They manage your AWS infrastructure directly",
      "They provide architectural guidance and best practices to help customers design optimal AWS solutions",
      "They write application code for customers",
      "They provide billing support and account management"
    ],
    ans: 1,
    explain: "AWS Solutions Architects provide technical guidance and best practices to help customers design and build well-architected solutions on AWS."
  }
];

---
sidebar_position: 1
title: How to make research software FAIR
description: How to make research software FAIR
---

## Overview

The Findable, Accessible, Interoperable, and Reusable (FAIR) guiding principles published in 2016 constitute the foundation for data management practices adopted by researchers, government agencies, private funders, and scholarly publishers to ensure the reusability of data by humans and machines. While postulated for all digital research objects, they fail to capture the specific traits of software such as dependencies and versioning. Consequently, reformulated FAIR guiding principles tailored for software have been proposed. Work from the Research Data Alliance (RDA) FAIR for Research Software (FAIR4RS) Working Group is the most extensive on the topic8. Just like the original FAIR guiding principles, the FAIR4RS guiding principles are aspirational and do not provide practical instructions and actionable items to the researchers. To fill this gap, we derived the first minimal and actionable step-by-step guidelines for biomedical researchers to make their research software compliant with the FAIR4RS principles. We designate these guidelines as the **FAIR Biomedical Research Software (FAIR-BioRS) guidelines**. Our process for developing these guidelines, based on a thorough review of current practices in the field, is available in our associated manuscript (to be published soon). The FAIR-BioRS guidelines are outlined below.

## Step 1: Best software development practices

Follow standard/best development practices during the development of the software

### 1.a: High-level scientific development standards

Follow high-level scientific software development standards and best practices such as the [`Good enough practices in scientific computing`](https://doi.org/10.1371/journal.pcbi.1005510). Especially consider working from a version control system such as Git.

We suggest reading the paper on the [`Good enough practices in scientific computing`](https://doi.org/10.1371/journal.pcbi.1005510)

### 1.b: Domain-specific standards

Follow domain-specific standards and best practices for developing biomedical research software such as the `General guidelines for biomedical software development`.

### 1.c: Language-specific standards

Follow applicable language-specific standards and best practices such as the Python Developer’s Guide or Google's R Style Guide.

### 1.d: Documentation standards

Follow standards and best practices for documenting your software such as `Ten simple rules for documenting scientific software`. Ensure that the following aspects are documented: inputs and outputs of the software, parameters and data required to run the software, the standards applied, and how to contribute to the software.

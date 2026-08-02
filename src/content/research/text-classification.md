---
title: "Text Classification for Legal Benchmarks"
description: "Hierarchical multilabel text classification on the Reuters RCV1 legal dataset, extending HiAGM with BERT + Graphormer, contrastive learning, and prototype learning."
links:
  - label: "link to report"
    href: "https://drive.google.com/file/d/16KJ5l0T-ppx1vVpAQBvf27UIIUaUNELE/view?usp=sharing"
order: 3
---

In this practicum project, we worked on hierarchical multilabel text classification (HMTC) with a focus on legal data, specifically using the Reuters RCV1 dataset. Our goal was to enhance classification by leveraging the inherent label hierarchy instead of treating it as a flat problem. We built upon the HiAGM (Hierarchy-aware Global Model) baseline, replacing its GloVe embeddings with BERT, and upgrading its structural encoder from GCN to Graphormer for better hierarchical representation.

To push the model further, we explored two advanced strategies: contrastive learning and prototype learning. For contrastive learning, we adapted supervised contrastive loss to a multi-label, hierarchical setting and used label-aware embeddings. We also integrated a distance matrix to encode hierarchical relationships and introduced a memory bank to handle label imbalance by storing positive samples across batches. This significantly improved performance, especially for infrequent labels.

For prototype learning, we introduced class prototypes and trained the model to bring embeddings closer to the correct prototypes and away from incorrect ones, incorporating anti-prototypes for negative sampling. To reflect label relationships, we used an adjacency cost matrix to scale the loss based on the distance between labels in the hierarchy. This approach showed improvements in certain label categories, although overall gains were modest, partly due to limited training epochs and imbalanced label distribution.

Our results show that incorporating hierarchical structure via contrastive and prototype-based losses improves HMTC performance, particularly when enhanced with memory and distance-based regularization. We also identified several paths for further improvement, including better initialization of prototypes and more sophisticated use of hierarchy-aware distances.

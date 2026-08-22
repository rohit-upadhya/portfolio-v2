---
title: "GAVEL — Graph-Augmented Paragraph Retrieval for Legal Judgments"
description: "Extends LexCLiPR with dual Graph Attention Networks (local 5-hop adjacency + global BERTopic topic nodes) trained under contrastive loss, outperforming a fully fine-tuned bi-encoder with a frozen mDPR encoder."
links:
  - label: "huggingface"
    href: "https://huggingface.co/rohit-upadhya/lexclipr-graph-stack__mdpr-tied-pft-msmarco__original"
tags: ["python", "pytorch", "PyG", "GAT", "contrastive-learning", "mDPR"]
order: 1
---

Extended LexCLiPR to address a limitation of fine-grained legal retrieval: chunking judgments into paragraphs strips the document context that determines relevance.

Modeled each judgment as its own paragraph-level graph, training dual 3-layer Graph Attention Networks — local 5-hop adjacency and global BERTopic topic nodes — under contrastive loss.

Outperformed a fully fine-tuned bi-encoder using a frozen mDPR encoder: Recall@5% of 53.5 vs 44.4 on seen queries and 39.0 vs 30.5 on unseen, against a 22.6 zero-shot baseline.

Showed combining local and global views beats either alone (53.5 vs 51.2 / 52.2), while per-layer fusion collapses to 35.2 through over-smoothing.

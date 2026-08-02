---
title: "LegalTech: Applications of Information Retrieval, Summarization and Simplification"
description: "A seminar paper on NLP applications in LegalTech — information retrieval, summarization, and simplification — including a hierarchical BERT classifier demo on ECtHR rulings."
links:
  - label: "link to report"
    href: "https://drive.google.com/file/d/1-hbcaBXlP78rq4g_HGbEzOo0uItHz_KY/view?usp=sharing"
order: 2
---

In this seminar paper, I explore the growing role of LegalTech in addressing the longstanding inefficiencies and complexities of the legal domain, particularly focusing on NLP applications like information retrieval, summarization, and simplification. The backlog of legal cases and the opaque nature of legal language present significant barriers to justice, and I argue that technology, especially NLP, offers meaningful solutions. I examine two major methodological approaches: symbol-based methods, which emphasize interpretability using legal-specific entities and events, and embedding-based methods, which utilize dense representations to model latent legal features. I also discuss Legal-BERT, a domain-adapted version of BERT that integrates legal corpora to improve performance on legal tasks.

The paper delves into specific LegalTech applications, such as legal information retrieval systems designed to link case scenarios with relevant statutes, legal text summarization to produce various levels of case summaries using models like BART, and simplification techniques that replace complex legal terminology with more accessible alternatives. I also cover advanced tasks like legal judgment prediction and similar case matching, emphasizing the importance of interpretability and domain-specific reasoning. As a demonstration, I implemented a binary classification system using rulings from the European Court of Human Rights, employing a hierarchical BERT model to overcome the token limit challenge. While the model showed good precision, recall was limited, likely due to dataset size and a lack of domain-specific pretraining. Overall, this work highlights the promise and challenges of applying NLP to the legal domain and sets the stage for future research into making legal systems more efficient and accessible.

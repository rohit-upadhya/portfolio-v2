---
title: "Cross-Lingual Query based Paragraph Retrieval for European Court of Human Rights Judgements"
kind: "Master's Thesis"
description: "LexCLiPR: a cross-lingual dataset from ECtHR judgements, used to benchmark and fine-tune LMs (Siamese and Two-Tower setups), plus GAVEL, a graph-based approach to paragraph retrieval. Accepted to ACL'25."
links:
  - label: "ACL paper"
    href: "https://aclanthology.org/2025.acl-long.683/"
  - label: "slides"
    href: "https://drive.google.com/file/d/1y6-7BkONmm8KtVCzo4n8drHlLm4TGs7Y/view?usp=sharing"
  - label: "full report"
    href: "https://drive.google.com/file/d/1AsN1IkvtPiLIChxOwqAUZ3C9Aa-VZ2gP/view?usp=sharing"
order: 1
---

<figure>
  <img src="/assets/muppet_lexclipr.png" alt="LexCLiPR illustration" />
</figure>

## Introduction

Searching for relevant information in case law is one of the fundamental activities of a law professional. However, as one can imagine, this is very taxing work, where numerous hours (by some estimates, over 30% of a legal professional's time) are spent sifting through these dense documents. There is a need for an advanced retrieval system that works accurately and efficiently, enabling legal professionals and lawyers to spend their time on more productive tasks.

Legal information retrieval (IR) presents various challenges. Firstly, legal text is extremely domain specific, with jargon that isn't present in day-to-day language. Secondly, legal documents are distinctly complex, with contorted argumentation presented in a structured manner. Thirdly, there is a varied amount of structural dependency, where one part of a document might attend to a completely different part of the same document, or different documents might cite and attend to another document altogether. Fourth, the legal landscape is quite dynamic and ever-changing. Finally, with the globalization of legal practice, it becomes imperative that retrieval systems support diverse languages, especially in multi-jurisdiction settings. Courts spanning multiple countries such as the ECHR, ICC, ICJ, PCA, ECJ, ITLOS, ECOWAS, AfCHPR, etc., as well as countries with multiple official languages such as India, Switzerland, South Africa, and Spain, need retrieval systems that bridge language barriers, mapping queries and context across languages. Such systems not only have to understand the jargon and intricacies of legal documents, but also need to understand the nuances and variations between languages.

Legal IR has become quite important in the legal domain, where lawyers need to find statutes, precedents, and documents from vast repositories. This includes retrieving relevant legislation, prior cases, civil codes, and patents, among others. This research dealt with the issue of legal case retrieval, specifically fine-grained paragraph retrieval from a larger case document.

We present three contributions to the legal domain as part of this research. Firstly, we present a new dataset called LexCLiPR &mdash; a Legal Cross-Lingual Paragraph Retrieval dataset based on ECtHR judgements. It contains query-judgment pairs, with queries in seven different languages mapped to English judgments. The dataset is available on GitHub, as a HuggingFace dataset, and can also be explored on Kaggle. The queries are obtained from concatenated section headers, while the relevance signal comes from discussions that cite the English ECtHR judgments. The dataset is split such that systems built on top of it are able to generalize during retrieval.

<figure>
  <img src="/assets/toc_turkish.jpg" alt="Illustration of the Table of Contents from the Turkish case law guide on Terrorism" />
  <figcaption>Fig. 1: Illustration of the Table of Contents from the Turkish case law guide on Terrorism, facilitating the derivation of legal concept queries for the LexCLiPR dataset.</figcaption>
</figure>

<figure>
  <img src="/assets/case_citation_turkish.jpg" alt="Illustration of contents of a case law guide with explicit references to relevant paragraphs in ECtHR judgments" />
  <figcaption>Fig. 2: Illustration of the case law guide, showing how legal concepts are discussed with explicit references to relevant paragraphs in ECtHR judgments, enabling the derivation of relevance signals for LexCLiPR.</figcaption>
</figure>

<figure>
  <img src="/assets/dataset_judgement.png" alt="Illustration of the cited paragraph from the relevant judgement document" />
  <figcaption>Fig. 3: Illustration of the cited paragraph from the relevant judgement document.</figcaption>
</figure>

The queries were collected by highlighting the topics and subtopics of the articles, and concatenating them to form a single query &mdash; we also call these "legal concepts." This is illustrated in Figure 1 using the Turkish case law guide on terrorism. Each (sub)section explains what it entails (Figure 2), and cites previous judgements along with the paragraph of interest. We obtain the relevant judgements and paragraphs from here, and then extract the same judgements from the [HUDOC](https://hudoc.echr.coe.int/) public database (Figure 3). The cited paragraphs under each (sub)section are taken as the paragraphs of relevance. So we end up with a query collected from the sections and subsections of the articles, the judgements cited in the explanation of the (sub)section, all the paragraphs pertaining to those judgements from HUDOC, and the cited relevant paragraph numbers from the articles &mdash; while the paragraph itself is part of the extracted judgement from HUDOC. The task is to accurately retrieve these relevant paragraphs from all the paragraphs of the judgement, given a query.

The LexCLiPR dataset is divided into two parts &mdash; Seen and Unseen queries. The Seen-query split is a proxy for all the legal concepts already present in the domain, while the Unseen-query split represents concepts that might enter the domain at a later date. The Seen-query split is further divided into train, val, and test sets. The Unseen-query split is used only for testing the various models' ability to generalize to unseen legal concepts.

## Methodology

We applied three levels of methods to work with our LexCLiPR dataset.

### Zero-Shot Experiments

The zero-shot experiments helped us establish the capabilities of various monolingual and multilingual LMs on task-specific and domain-specific data. We used the BM25 lexical method to establish a lexical baseline. Since our judgement paragraphs are all in English, we needed to translate the non-English queries into English, using [Meta's NLLB-200](https://huggingface.co/facebook/nllb-200-3.3B) model. We built our baselines on [BERT](https://www.huggingface.co/google-bert/bert-base-uncased), [mBERT](https://www.huggingface.co/google-bert/bert-base-multilingual-cased), [DPR](https://www.huggingface.co/facebook/dpr-ctx_encoder-single-nq-base), [mDPR](https://www.huggingface.co/castorini/mdpr-tied-pft-msmarco), and [mLegalBERT](https://www.huggingface.co/joelniklaus/legal-xlm-roberta-base).

### Fine-Tuning

With the fine-tuning experiments, we look to establish that fine-tuning a pretrained model on domain-specific data generally improves its retrieval capability. Figure 4 describes the fine-tuning process. Since each query might have many paragraphs cited from a single judgement, we label all these cited paragraphs as positive, and the rest of the uncited paragraphs as negative. For each positive paragraph, we pick seven negative paragraphs at random. This forms one iteration of our fine-tuning process. We pass these paragraphs and the query through an encoder pipeline, obtain the encodings of each paragraph and the query, and apply cosine similarity between paragraph embeddings and the query. We obtain these results as logits after a softmax function, and apply contrastive loss to fine-tune our models.

We used two different architectures for our encoder pipelines &mdash; Siamese and Two-Tower. In the Siamese pipeline, we use a single model to encode both the judgement paragraphs and the query; we'd expect this architecture to perform better with translated queries (Figure 5). In the Two-Tower architecture, we have two separate encoders for the queries and the judgement paragraphs, which should ideally perform better on multilingual models (Figure 6).

<figure>
  <img src="/assets/fine_tune_process_1.png" alt="Fine-tuning pipeline" />
  <figcaption>Fig. 4: Fine-Tuning Pipeline.</figcaption>
</figure>

<figure>
  <img src="/assets/siamese.png" alt="Siamese encoder architecture" />
  <figcaption>Fig. 5: Siamese Encoder Architecture.</figcaption>
</figure>

<figure>
  <img src="/assets/two_tower.png" alt="Two-Tower encoder architecture" />
  <figcaption>Fig. 6: Two-Tower Encoder Architecture.</figcaption>
</figure>

### Fine-Tuning with Paragraph Contextualization

Fine-grained IR usually means larger documents are chunked to produce finer-grained texts, paragraphs, sentences, etc. This strips away the contextual information present between chunks. Traditional IR methods ignore this contextual information, relying on the text itself to convey the necessary meaning. However, there's a lot of contextual information that goes unused. What we try to do as part of this research is enhance paragraph representation using contextualization.

We represent each paragraph as a node, and the relationships between them as edges in a graph, then apply graph-learning algorithms to enhance paragraph embeddings. We use the encodings of individual paragraphs as node features, and use message passing on these representations, via a 3-layer GAT (Graph Attention Network). Our underlying encoder is mDPR, out of the box, without any fine-tuning applied. We call this approach GAVEL: **G**raph-**A**ugmented **V**iews for **E**nriching Paragraph Representations for Retrieval in **L**egal Judgments.

The obvious question is how we build these connections. As part of this thesis, we focus on two methods &mdash; Local and Global. In the Local method, we perform an n-hop connection, where each paragraph is connected to its previous and next n paragraphs (Figure 7 illustrates a 2-hop approach). In the Global method, we try to obtain relevant information keeping in mind the global context of the document. We use BERTopic to perform topic modelling and obtain relevant topics from each judgement; these topics are taken as additional nodes. BERTopic also returns the probability of a paragraph belonging to a particular topic, and we only connect paragraph-topic pairs whose probability exceeds a threshold (0.30 in our case). Figure 8 illustrates this approach.

<figure>
  <img src="/assets/custom_2_hop.png" alt="Graph construction using 2-hop technique" />
  <figcaption>Fig. 7: Graph Construction using 2-Hop Technique.</figcaption>
</figure>

<figure>
  <img src="/assets/graph_thresh.png" alt="Graph construction using topic (threshold) technique" />
  <figcaption>Fig. 8: Graph Construction using Topic (Threshold) Technique.</figcaption>
</figure>

For our main methodology, we apply the local and global approaches in unison, to obtain a holistic view of the document. We use the same judgements to build two different graphs &mdash; local and global &mdash; each passed into their own GAT, giving two sets of paragraph representations. We append the corresponding updated paragraph embeddings (e.g. paragraph 1's embedding from the local pipeline is appended to paragraph 1's embedding from the global pipeline, and so on); the topic embeddings from the global approach are discarded. We pass these appended embeddings through a feed-forward network to return them to their original embedding size, then follow the same fine-tuning process as before &mdash; cosine similarity followed by contrastive loss. Figure 9 illustrates this.

<figure>
  <img src="/assets/graph_process.png" alt="Graph-based fine-tuning pipeline" />
  <figcaption>Fig. 9: Graph-Based Fine-Tuning Pipeline.</figcaption>
</figure>

To go through the results, see [my slides](https://drive.google.com/file/d/1y6-7BkONmm8KtVCzo4n8drHlLm4TGs7Y/view?usp=sharing). For a more detailed report, with more results and nuanced discussion, read my [full report](https://drive.google.com/file/d/1AsN1IkvtPiLIChxOwqAUZ3C9Aa-VZ2gP/view?usp=sharing), where my sources can also be found. LexCLiPR was accepted to the ACL'25 main conference, held in Vienna, Austria. We also submitted GAVEL for review at AACL'25, to be held in Mumbai, India.

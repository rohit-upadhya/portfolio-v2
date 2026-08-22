---
title: "SmoLLM — 109M Parameter Language Model from Scratch"
description: "A Llama-style decoder-only transformer built from scratch — custom BPE tokenizer, RoPE, RMSNorm, SwiGLU — pretrained on FineWeb-Edu, then instruction-tuned on databricks-dolly-15k."
links:
  - label: "huggingface"
    href: "https://huggingface.co/rohit-upadhya/SmoLLM-109M-base"
  - label: "github"
    href: "https://github.com/rohit-upadhya/smol-llm"
tags: ["python", "pytorch", "transformers", "RoPE", "SwiGLU", "BPE"]
order: 2
---

Implemented a Llama-style decoder-only transformer from scratch: 109.5M parameters, 12 layers, 768 hidden dimensions, 12 attention heads, 512 token context, a custom BPE tokenizer (~32k vocab), RoPE positional encoding, RMSNorm, SwiGLU, and multi-head causal attention.

Pretrained on FineWeb-Edu (sample-10BT) at a Chinchilla-optimal token budget of roughly 2.2B tokens (~20 tokens per parameter). Diagnosed and fixed a training bug where EOS tokens were never appended at document boundaries, then ran a continued-pretraining phase to recover sequence-termination behavior.

Instruction-tuned on databricks-dolly-15k and released both base and instruct checkpoints publicly. The base model reliably completes high-frequency memorized sequences and produces fluent text, but shows limited in-context pattern learning and no factual reliability — it memorizes patterns rather than facts, which is expected at this scale.

Measured WikiText-2 perplexity of 74.57 on the base checkpoint (out-of-distribution evaluation, since training used FineWeb-Edu rather than WikiText).

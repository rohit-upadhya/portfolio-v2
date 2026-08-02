---
title: "SmoLLM — 109M Parameter Language Model from Scratch"
description: "A Llama-style decoder-only transformer built from scratch — custom BPE tokenizer, RoPE, RMSNorm, SwiGLU — pretrained on FineWeb-Edu on a single NVIDIA A30, then instruction-tuned on databricks-dolly-15k."
order: 2
---

Implemented a Llama-style decoder-only transformer from scratch — custom BPE tokenizer, RoPE, RMSNorm, SwiGLU, multi-head attention with causal masking — pretrained on FineWeb-Edu on a single NVIDIA A30.

Diagnosed and fixed a training bug where EOS tokens were never appended at document boundaries, then ran continued pretraining to recover sequence termination behavior.

Instruction-tuned on databricks-dolly-15k and released base and instruct checkpoints publicly.

Measured WikiText-2 perplexity of 74.57 on the base checkpoint.

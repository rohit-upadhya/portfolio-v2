---
title: "Do LLMs Think?"
date: 2025-04-01
description: "A running, incomplete note on whether neural networks 'think', and what sparse autoencoders reveal about the features hiding inside them."
---

![A robot thinking](/assets/robot_thinking.png)

As a disclaimer, this writing isn't comprehensive, well researched, or even complete. It's a question I ponder over often, and as I find more information on this topic, this post will certainly change. How do these machine learning models think? While it's true that we've yet to figure out the exact inner workings of a neural network, there have been numerous studies by the major AI providers of today, like Anthropic and OpenAI. Some of this research has shown that neural networks abstract real-world concepts into "features." I won't go into details here, but it's an interesting question nonetheless.

They've used something called a sparse autoencoder, which tries to measure how the various neurons fire up at a given layer, given a particular input. Anthropic's paper is linked [here](https://transformer-circuits.pub/2024/scaling-monosemanticity/index.html). Again, I'm not sure if this is even the latest research (judging by the fact that it was published in May 2024, it doesn't appear to be bleeding edge anymore). I'll be sure to add more content here as and when I update my knowledge.

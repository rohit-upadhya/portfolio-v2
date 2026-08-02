---
title: "An Intelligent System for Diagnosis of Diabetic Retinopathy"
kind: "Bachelor's Thesis"
description: "ISDR: an automated early-detection system for diabetic retinopathy using CLAHE-enhanced fundus images, FAZ/microaneurysm segmentation, and SVM/K-NN/GNB classifiers."
links:
  - label: "link to paper"
    href: "https://link.springer.com/chapter/10.1007/978-981-15-3287-0_8"
order: 4
---

We proposed an Intelligent System for Diabetic Retinopathy (ISDR) that automates early detection of diabetic retinopathy (DR), a diabetes-related eye disease that can lead to blindness. Using retinal fundus images from a digital fundus camera, the system enhances image quality through contrast-limited adaptive histogram equalization (CLAHE) and then segments key features like the foveal avascular zone (FAZ) and microaneurysms (MA), which are early indicators of DR. These features are classified using support vector machine (SVM), k-nearest neighbors (K-NN), and Gaussian Naive Bayes (GNB), with SVM performing best due to its ability to handle non-linear data. The model classifies DR into five severity levels, from no DR to proliferative DR. A balanced dataset of 2,500 images from Kaggle was used for training and testing. The system achieved its highest accuracy of 51.8% when using both FAZ and MA as input features. Experimental results showed that SVM outperformed other classifiers on most evaluation metrics. Limitations were noted in segmentation quality, which affects classification accuracy. The study highlights the potential of using machine learning for DR screening and suggests adding more retinal features in future work for improved performance.

# Arctic Sea Ice Classification (TSViT)

## One-Liner
A deep learning framework for sea ice classification, using **Vision Transformer (TSViT) models** to provide mission-critical data for safe maritime navigation, energy exploration, and strategic defense operations.

---
## The Challenge

- **Massive Datasets:** The primary AI4ARCTIC dataset is enormous (over 500GB total), making standard download methods impractical and prone to failure.
- **Unreliable Data Transfer:** Single-file download methods frequently failed, requiring a more robust, programmatic solution to acquire the data reliably.
- **Data Imbalance:** The initial, smaller dataset suffered from a lack of high-density sea ice examples, which negatively affected early model performance and required architectural adjustments.

---
## My Role & Contributions

- **Lead Architect & Engineer:** Served as the sole developer, responsible for the entire project from conception to implementation.
- **Framework Modernization:** Upgraded the entire deep learning framework to a modern stack (Python 3.11, PyTorch 2.1+), ensuring compatibility and performance.
- **Robust Data Ingestion:** Developed a custom, programmatic API client to reliably download and manage massive, multi-hundred-gigabyte datasets (AI4ARCTIC).
- **HPC Environment Preparation:** Configured the software environment and data pipelines for large-scale training experiments on the 224-core university HPC cluster.
- **Model Selection & Iteration:** Researched and implemented the state-of-the-art TSViT model, evolving the architecture from a single-modal (v1) to a more robust temporal analysis (v2) approach.

---
## Architecture & Technical Deep Dive

#### Core Model: Why a Temporal-Spatial Vision Transformer (TSViT)?
The choice of a Vision Transformer architecture was inspired by its successful application in a similar remote sensing domain (land use classification). The project aims to replicate that success and eventually incorporate advanced explainability features from Swin Transformer variants.

- **V1 - Single Modality Baseline:** The initial implementation focused on a single data modality to establish a performance baseline.
- **V2 - Temporal Analysis:** The architecture was evolved to better leverage the *temporal* dimension of the data. This move from a purely spatial analysis to a spatio-temporal one was the key to overcoming the challenges presented by data imbalances and improving results.
- **Future - Multi-Modal Fusion:** The next stage is to expand the model to a full multi-modal approach, fusing optical, SAR, and meteorological data to create a comprehensive classification system.

#### Tech Stack

- **Core Language & Framework:** Python 3.11, PyTorch 2.1+
- **Key ML/DL Libraries:** `einops`, `transformers`, `timm` (PyTorch Image Models)
- **Environment Management:** Conda, Pip
- **Configuration:** YAML for model and training configs
- **Data Handling:** Pandas, Xarray (for NetCDF/Zarr data)
- **HPC & Orchestration:** SLURM (for job scheduling on the cluster), Bash scripting

---

#### Data Pipeline

The project required a robust pipeline to handle the massive and complex satellite data, moving it from the data provider to the training process on the HPC cluster.

1.  **Programmatic Download:** A custom Python script was developed to interface directly with the data provider's API. This allowed for the reliable, sequential download of hundreds of gigabytes of data, bypassing the issues with single-file transfer failures.
2.  **Data Staging & Preprocessing:** Raw satellite data (SAR, optical, meteorological) is staged on the HPC cluster's file system. A series of preprocessing steps are applied, including normalization, aligning different data modalities in time, and extracting spatio-temporal "patches" suitable for the model.
3.  **Efficient Loading:** Custom PyTorch `Dataset` and `DataLoader` classes were implemented to efficiently load these preprocessed patches from disk, perform any necessary data augmentation, and feed them to the model for training, ensuring the GPUs are never idle.

---

#### HPC Training Environment

Training a model of this complexity on a 500GB+ dataset would be impossible on a single machine. The university's 224-core "Nitrous" HPC cluster was essential to the project's success.

-   **Job Scheduling:** SLURM scripts were written to schedule and manage training runs, allowing for efficient allocation of compute nodes and GPUs.
-   **Scalability:** The environment was specifically configured to handle the large-scale data I/O and memory requirements of the TSViT model.
-   **Future Work - Distributed Training:** The setup is currently being prepared for multi-node distributed training using PyTorch's DistributedDataParallel (DDP). This will enable even faster and larger experiments in the future, further scaling the research capabilities.

---

## Outcome & Impact

- The final model achieved **98.4% accuracy** on the test dataset.
- The evolution from a single-modal (v1) to a temporal (v2) approach was critical in overcoming data imbalance issues and significantly improving the model's robustness.
- This project serves as the foundation for a future paper and provides a powerful, end-to-end case study in building AI systems for critical environmental monitoring.
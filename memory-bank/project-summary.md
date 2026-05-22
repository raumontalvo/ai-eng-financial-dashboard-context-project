# Project Summary: ai-eng-financial-dashboard-context-project

## Overview
This repository implements a financial dashboard project with a clear separation between frontend and backend, containerized using Docker Compose. The project is structured to support maintainability, governance, and collaborative development, as evidenced by the presence of `.agents/rules` and `memory-bank` directories.

## Frontend
- **Framework:** React with TypeScript
- **Location:** `frontend/`
- **Key Files:**
  - `App.tsx`, `main.tsx`, and supporting components under `src/`
  - UI and dashboard components (e.g., `dashboard-header.tsx`, `kpi-card.tsx`)
  - Type definitions and utility libraries in `lib/`
- **Configuration:**
  - TypeScript configs (`tsconfig*.json`)
  - Vite for build tooling (`vite.config.ts`)
  - ESLint for code quality (`eslint.config.js`)
- **Mock Data:**
  - Financial mock data and utility functions in `lib/mock-data.ts` and related files

## Backend
- **Framework:** FastAPI (Python)
- **Location:** `backend/app/`
- **Key Files:**
  - `main.py`, `routes.py`, and `__init__.py`
- **Endpoints:**
  - Financial metrics endpoints are defined in `routes.py`
- **Testing:**
  - Pytest-based tests in `backend/tests/` (e.g., `test_routes.py`)
- **Dependencies:**
  - Managed via `requirements.txt`

## Containerization & Orchestration
- **Docker Compose:**
  - Top-level `docker-compose.yml` orchestrates both frontend and backend services
- **Dockerfiles:**
  - Separate Dockerfiles for frontend and backend

## Governance & Maintainability
- **Governance Structure:**
  - `.agents/rules` directory for agent work instructions and rules
  - `memory-bank/` for maintainability artifacts and project memory

## Testing
- **Backend:**
  - Automated tests for API endpoints using pytest
- **Frontend:**
  - No direct evidence of frontend tests in the current structure

## Summary
This repository is a well-structured, governance-oriented financial dashboard project. It features a React + TypeScript frontend, a FastAPI backend, Docker Compose orchestration, and a focus on maintainability and collaboration. The codebase includes mock data generation, financial metrics endpoints, and automated backend tests, with clear evidence of governance and maintainability practices.
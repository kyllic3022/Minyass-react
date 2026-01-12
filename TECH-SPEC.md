# Tech Spec

## Core Stack

- React Native: Expo managed + dev client (with path to prebuild/eject if needed)
- Language: TypeScript
- State/data: React Query + Zustand

## Backend & Data

- Firebase Firestore for shared data + realtime sync
- Firebase Anonymous Auth with invite code pairing
- Firebase Storage for photo locket

## Notifications & Reliability

- FCM notification messages (not data-only)
- Cloud Functions to send heartbeat and log delivery
- Background reliability: use Expo + native modules only if you truly need headless JS; otherwise lean on FCM notification delivery and in-app health checks

## Build & Release

- EAS Build for APK/AAB (private distribution)
- Crashlytics via Firebase (supported in Expo prebuild)

## Dev Quality

- ESLint + Prettier
- Jest for logic, Detox later if you feel it?s necessary

## Implementation Plan

### Milestone 1: Foundations
- Repo setup, TypeScript, ESLint + Prettier
- Firebase project wiring (Firestore, Auth, Storage)
- Pairing flow with invite code

### Milestone 2: Heartbeat & Notification Reliability
- Heartbeat send/receive via Cloud Functions + FCM notification messages
- Delivery logging + basic health check
- In-app retry and status states

### Milestone 3: Core Relationship Features
- Relationship counter
- Photo locket upload/view
- Shared note/canvas

### Milestone 4: BPD Check-Ins & Co-Regulation
- Trigger + need selection flow
- Sharing behavior + partner prompt panel
- Suggestion box with reusable options

### Milestone 5: Medication & Mood
- Mood check and status beacon
- Medication reminders + acknowledgment

### Milestone 6: Stabilization
- Offline cached view
- Crashlytics integration
- QA pass on Android devices

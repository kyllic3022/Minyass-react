# Project Context

## Overview
Darlen-ls is a private, two-person Android-only React Native app for a long-distance relationship. The core promise is instant, passive connection without typing, delivered via a heartbeat signal (push + vibration) that works even when the app is killed or the phone is locked.

## Goals
- Deliver heartbeat notifications in <= 1 second p95 with >= 95% success rate.
- Provide a shared emotional support space (mood and BPD check-ins, medication reminders).
- Keep the experience private and dedicated to two users only.

## Target Users
- Illy (Rabat, Morocco) and Mins (Islamabad, Pakistan), both on Android.

## Core MVP Features
- Heartbeat: send/receive heartbeat with push notification + vibration.
- Relationship counter: count up from 2025-03-23.
- Status/mood beacon and separate daily mood check.
- BPD check-ins: triggers and "what I need right now" options; suggestion box for what helped.
- Medication tracker: AM/PM doses with mg, reminders, acknowledgments.
- Shared note/canvas with near-real-time sync.
- Photo locket: in-app random photo display with server-stored photos.
- Offline fallback: show last known status; queue heartbeat until connectivity returns.
- Notification health check and troubleshooting flow.

## Out of Scope (Post-MVP)
- Weather sync
- Music sync
- External home screen widgets
- Multi-user or public accounts

## Technical Constraints
- React Native, Android-only.
- FCM notification messages for killed/locked delivery reliability.
- Private distribution (no Play Store).
- Device features: notifications, vibration, storage/media, background allowances.

## Success Metrics
- Heartbeat p95 <= 1 second.
- Notification delivery success rate >= 95%.
- Daily app use >= 5 days/week.
- Mood check >= 4 days/week.
- Medication reminders acknowledged 2x/day.
- Crash-free sessions >= 99%.

## References
- PRD: _bmad-output/planning-artifacts/prd.md
- Product Brief: _bmad-output/planning-artifacts/product-brief-Darlen-ls-2026-01-11-211342.md

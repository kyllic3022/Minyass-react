---
stepsCompleted: [1, 2, 3, 4, 5]
inputDocuments:
  - C:\Users\Darlen-ls\Minyass-react\_bmad-output\analysis\brainstorming-session-2026-01-11-123452.md
  - C:\Users\Darlen-ls\Minyass-react\_bmad-output\analysis\brainstorming-session-2026-01-11-131047.md
date: 2026-01-11-211342
author: eliot
---

# Product Brief: Darlen-ls

## Executive Summary

Darlen-ls is a private, two-person Android React Native app for long-distance partners who want instant, passive connection without typing. The core promise is a sub-1-second heartbeat signal with push notification and vibration, even when the app is killed, plus a shared space for emotional check-ins and support. The MVP focuses on heartbeat delivery, an in-app photo locket, and a BPD support flow with shared triggers/needs and medication reminders.

---

## Core Vision

### Problem Statement

Current messaging apps require active engagement to feel connected. For long-distance partners, that friction makes "I am thinking of you right now" hard to convey instantly, especially when phones are locked or apps are killed.

### Problem Impact

The lack of instant, passive connection creates emotional distance, especially during moments of anxiety, overwhelm, or when one partner needs reassurance fast. It also makes consistent check-ins and support routines harder to maintain.

### Why Existing Solutions Fall Short

Tools like WhatsApp and Telegram are designed for conversation, not instantaneous emotional signaling. They do not provide a dedicated, low-friction, two-person space for heartbeat-style connection or structured mental health support flows.

### Proposed Solution

A dedicated Android app that delivers an immediate "heartbeat" signal (push + vibration) in 1 second or less via FCM, alongside a private shared space for an in-app photo locket and structured BPD support. The BPD feature includes trigger check-ins, "what I need right now" options, and a medication intake tracker with AM/PM dose reminders.

### Key Differentiators

- Instant, passive heartbeat connection that works when the app is killed
- Two-person private space designed for emotional closeness, not chat
- Built-in BPD co-regulation tools and medication reminders for real support

## Target Users

### Primary Users

**Illy (Rabat, Morocco; Android)**
- Context: One of the two partners in a long-distance relationship
- Needs: Full feature set for instant connection and shared emotional support
- Success: Feels consistently closer and reassured through the app's passive connection

**Mins (Islamabad, Pakistan; Android)**
- Context: The other partner in the long-distance relationship
- Needs: Heartbeat, photo locket, and BPD check-ins for shared emotional support
- Success: Feels closer and supported through instant signals and shared routines

### Secondary Users

N/A (private two-person product)

### User Journey

**Discovery/Onboarding**
- Each device selects a profile at setup (Illy or Mins)
- Both users are Android-only, paired as a private two-person space

**Core Usage**
- Daily use of all features: heartbeat signals, photo locket, and BPD check-ins
- Mood check is separate from BPD check-ins to keep daily emotion tracking light

**Success Moment**
- Realization that connection feels instant and effortless without typing
- The separate mood check becomes a simple daily anchor alongside deeper BPD support

## Success Metrics

- Heartbeat delivered in <=1 second for 95%+ of sends
- Daily app use on at least 5 days/week
- Medication reminders acknowledged 2x/day
- Mood check completed at least 4 days/week

### Business Objectives

- Zero critical notification failures in 30 days
- App stability: fewer than 1 crash per week

### Key Performance Indicators

- Heartbeat latency p95 <= 1 second
- Weekly active days per user >= 5
- Medication reminder acknowledgment rate >= 90%
- Mood check completion rate >= 4 days/week
- Crash-free sessions >= 99%

## MVP Scope

### Core Features

- Heartbeat: FCM push + vibration even when app is killed, <=1 second
- In-app photo locket with server-stored photos
- Status/mood beacon
- Mood check (separate from BPD)
- BPD check-ins with triggers and "what I need right now" options
- Medication tracker: AM/PM dose + mg + reminder notifications
- Shared note/canvas with real-time sync

### Out of Scope for MVP

- External Android home screen widget
- Weather sync
- Music sync
- Multi-user or public accounts

### MVP Success Criteria

- Heartbeat delivery meets <=1 second p95 target
- Both users complete onboarding and use core features daily
- Medication reminders are acknowledged consistently
- Mood check becomes a routine (>=4 days/week)

### Future Vision

- Weather sync
- Music sync
- Widgets
- Expanded co-regulation tools and insights

<!-- Content will be appended sequentially through collaborative workflow steps -->

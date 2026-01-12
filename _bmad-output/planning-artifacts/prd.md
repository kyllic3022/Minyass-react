---
stepsCompleted: [1, 2, 3, 4, 7, 8, 9, 10]
inputDocuments:
  - C:\Users\Darlen-ls\Minyass-react\_bmad-output\planning-artifacts\product-brief-Darlen-ls-2026-01-11-211342.md
  - C:\Users\Darlen-ls\Minyass-react\_bmad-output\analysis\brainstorming-session-2026-01-11-123452.md
  - C:\Users\Darlen-ls\Minyass-react\_bmad-output\analysis\brainstorming-session-2026-01-11-131047.md
documentCounts:
  briefs: 1
  research: 0
  brainstorming: 2
  projectDocs: 0
workflowType: 'prd'
lastStep: 10
---

# Product Requirements Document - Darlen-ls

**Author:** eliot
**Date:** 2026-01-11-211342

## Executive Summary

Darlen-ls is a private, two-person Android React Native app for long-distance partners who want instant, passive connection without typing. The core promise is a sub-1-second heartbeat signal with push notification and vibration, even when the app is killed, plus a shared space for emotional check-ins and support. The MVP focuses on heartbeat delivery, an in-app photo locket, and a BPD support flow with shared triggers/needs and medication reminders. The product is intentionally built in React Native for Android to keep development lean and focused.

### What Makes This Special

Instant, passive heartbeat connection that works even when the app is killed, combined with a private two-person space and built-in BPD co-regulation tools that mainstream messaging apps do not offer.

## Project Classification

**Technical Type:** mobile_app (React Native, Android-only)
**Domain:** general (personal relationship support)
**Complexity:** low
**Project Context:** Greenfield - new project

Classification signals: "Android, app, mobile" from the product brief.

## Success Criteria

### User Success

- Heartbeat signals deliver in <= 1 second for 95%+ of sends
- Users open the app on at least 5 days per week
- Mood check completed at least 4 days per week
- Medication reminders acknowledged twice per day

### Business Success

- Zero critical notification failures in any 30-day period
- App stability: fewer than 1 crash per week

### Technical Success

- Heartbeat p95 latency <= 1 second
- Notification delivery works when app is killed/locked (FCM notification messages)
- Crash-free sessions >= 99%

### Measurable Outcomes

- Weekly active days per user >= 5
- Medication reminder acknowledgment rate >= 90%
- Mood check completion rate >= 4 days/week
- Heartbeat latency p95 <= 1 second
- Crash-free sessions >= 99%

## Product Scope

### MVP - Minimum Viable Product

- Heartbeat: push + vibration even when app is killed
- In-app photo locket with server-stored photos
- Status/mood beacon
- Mood check (separate from BPD)
- BPD check-ins (triggers + "what I need right now")
- Medication tracker: AM/PM dose + mg + reminders
- Shared note/canvas with real-time sync

### Growth Features (Post-MVP)

- Weather sync
- Music sync
- External widgets

### Vision (Future)

- Expanded co-regulation tools and insights
- Broader emotional support features

## User Journeys

**Journey 1: Illy's First Day - "We are Connected Without Typing"**
Illy installs Darlen-ls on his Android phone, chooses the "Illy" profile, and pairs with Mins. He sets the relationship start date to 2025-03-23 and sees the counter immediately begin counting up. He uploads a few photos to the locket and sends the first heartbeat. Within a second, Mins receives a notification and vibration. Illy feels the app's promise, instant, passive connection without needing to type.

**Journey 2: Mins' Daily Use - "Quiet Reassurance"**
Mins opens the app in the evening and sees the relationship counter still climbing. She checks the photo locket, taps a heartbeat, and receives one back shortly after. She completes a quick mood check, then opens the BPD check-in to select triggers and "what I need right now." The app reminds her of her PM medication dose and she acknowledges it. The routine feels supportive, private, and effortless.

**Journey 3: Edge Case - "Heartbeat Fails on Poor Network"**
Illy sends a heartbeat while traveling with weak connectivity. The notification is delayed. The app surfaces a subtle "sending" state and retries in the background until delivery is confirmed. If delivery fails, Illy sees a gentle message suggesting to retry when connected.

**Journey 4: Troubleshooting - "Notification Did Not Arrive"**
Mins does not receive a heartbeat. She opens the app, which runs a quick health check: confirms notification permission, battery optimization settings, and FCM token status. The app provides a one-tap fix guide (enable notifications, exclude from battery optimizations), then prompts a test heartbeat to verify delivery.

### Journey Requirements Summary

- Profile selection and pairing flow for two devices
- Relationship counter (start date 2025-03-23)
- Heartbeat send/receive with <=1 second delivery and fallback status
- Photo locket upload and display
- Mood check and BPD check-ins with "what I need right now" options
- Medication reminders with AM/PM dose tracking
- Notification health check and recovery guidance

## mobile_app Specific Requirements

### Project-Type Overview

Darlen-ls is an Android-only React Native app, distributed outside the Play Store. It must deliver instant notifications and support lightweight offline behavior.

### Technical Architecture Considerations

- Push delivery via FCM (notification messages) to work when app is killed/locked
- Offline mode shows last known status and cached data
- Background handling for retry and health checks
- Private distribution (no Play Store compliance needed)

### Platform Requirements

- Android-only support (no iOS)

### Device Permissions & Features

- Notifications (required)
- Vibration (required)
- Storage/media access for photo locket
- Background execution allowances for notification reliability

### Offline Mode

- Read-only cached view when offline
- Queue heartbeat send until connectivity returns (optional)

### Implementation Considerations

- Ensure battery optimization guidance for reliable delivery
- Store FCM token reliably and refresh on app start

## Project Scoping & Phased Development

### MVP Strategy & Philosophy

**MVP Approach:** Platform MVP (full feature foundation from day one)
**Resource Requirements:** Solo developer (React Native + Firebase/FCM), Android-only

### MVP Feature Set (Phase 1)

**Core User Journeys Supported:**
- Illy first-day onboarding and pairing
- Mins daily use with heartbeat + photo locket + BPD/mood + meds
- Edge case delivery failures with retry
- Troubleshooting flow for notification issues

**Must-Have Capabilities:**
- Heartbeat: push + vibration even when app is killed (<=1 second p95)
- Relationship counter (start date 2025-03-23)
- In-app photo locket (server storage)
- Status/mood beacon + separate mood check
- BPD check-ins with triggers and "what I need right now"
- Medication tracker (AM/PM + mg + reminders)
- Shared note/canvas with real-time sync
- Notification health check + recovery guidance
- Offline fallback to last known status

### Post-MVP Features

**Phase 2 (Post-MVP):**
- Weather sync
- Music sync
- External widgets

**Phase 3 (Expansion):**
- Expanded co-regulation tools and insights
- Broader emotional support features

### Risk Mitigation Strategy

**Technical Risks:** Android push reliability when app is killed, mitigate with FCM notification messages and battery optimization guidance.
**Market Risks:** Very small user base (two users), acceptable for personal project.
**Resource Risks:** Solo developer scope, prioritize stability and delivery over polish.

## Functional Requirements

### User Identity & Pairing

- FR1: Users can select a personal profile (Illy or Mins) during setup.
- FR2: Users can pair two devices into a private two-person space.
- FR3: The system can prevent pairing with more than the two designated users.
- FR4: Users can view the paired partner's name/profile within the app.

### Relationship Counter

- FR5: Users can set the relationship start date (2025-03-23).
- FR6: Users can view a live count-up timer since the start date.

### Heartbeat Connection

- FR7: Users can send a heartbeat signal to their partner.
- FR8: Users can receive heartbeat notifications from their partner.
- FR9: Users can receive a vibration pulse when a heartbeat arrives.
- FR10: Users can see delivery status for a sent heartbeat.
- FR11: The system can retry heartbeat delivery if a send fails.
- FR12: The system can queue a heartbeat for delivery when connectivity resumes.

### Status & Mood Beacon

- FR13: Users can set a short status (e.g., Asleep, Busy, I Miss You).
- FR14: Users can view their partner's current status.
- FR15: Users can complete a lightweight daily mood check.
- FR16: Users can view their partner's latest mood check.

### BPD Check-Ins & Co-Regulation

BPD co-regulation lives primarily in the BPD check-in flow, with an optional quick co-regulation shortcut on the home screen for fast access when needed.

**Common triggers (predefined list for selection, plus custom items):**
- Fear of abandonment / abandonment anxiety
- Dissociation thoughts
- Body image issues
- Feeling distant from you
- Feeling uncontrollable emotions (rage or panic attacks)
- Feeling like an upcoming breakdown will happen
- Feelings of emptiness
- Feelings of hopelessness about future
- Feelings of being not good enough
- Rejection sensitivity
- Emotions becoming too fast to handle
- Overthinking
- Increase in guilt and shame
- Past trauma memories being triggered
- Self-harming thoughts / suicidal ideation (doesnt happen anymore but can)
- Low frustration tolerance
- Stress so overwhelming that I am physically in pain

**What I need right now (multi-select support options, plus custom items):**
- Need reassurance
- Need space
- Need to deep breathe with you
- Need you to help ground me (5-4-3-2-1 technique)
- Need to videocall so I can see you and feel like I'm not relapsing into old memories
- Need a fully focused, attentive, active listening conversation
- Anti-stress activity
- Some co-regulation technique
- Need emotions validated
- Temperature reset (warm blanket, holding ice, or water on wrists)
- Silent presence (5-10 minutes of just looking at each other and being together)
- Go and smell your sweatshirt + perfume
- Naming emotions together and finding root cause
- When calm, write down which co-regulation/safety technique helped the most
- Watching a show or movie together to distract from the overwhelm

**Sharing and guidance:**
- Submit shares selections to the partner in real time, with an optional review-before-share setting.
- After selection, show one recommended co-regulation action and a short partner prompt script.
- If self-harm thoughts/ideation is selected, show a gentle safety notice and a reach-out prompt.

**Flow:**
- Select trigger(s)
- Select what I need right now
- Optional note + suggestion box for "what helped this time" (can be saved as a reusable option)
- Submit and partner sees a "respond now" panel

- FR17: Users can log BPD-related triggers from a predefined list and add custom items.
- FR18: Users can select "what I need right now" support options from a predefined list, add custom items, and access a quick co-regulation shortcut to open this flow.
- FR19: Users can view their partner's BPD check-ins in real time after submission (with an optional review-before-share setting).
- FR20: Users can record which co-regulation/safety technique helped most and add an optional note.
- FR21: Users can maintain a suggestion box for "what helped this time" and save entries as reusable options.

### Medication Tracking

- FR22: Users can set AM and PM medication doses with mg values.
- FR23: Users can receive medication due reminders.
- FR24: Users can acknowledge a medication reminder.
- FR25: Users can view the partner's medication status (shared by default).

### Shared Note / Canvas

- FR26: Users can create and edit a shared note.
- FR27: Users can view updates to the shared note in near-real-time.

### Photo Locket

- FR28: Users can upload photos to the shared locket.
- FR29: Users can view a rotating/random photo in the locket.
- FR30: Users can view partner-uploaded photos in the locket.

### Offline & Recovery

- FR31: Users can view last known status and content while offline.
- FR32: The system can detect notification delivery issues.
- FR33: The system can guide users through notification troubleshooting steps.
- FR34: Users can run a test heartbeat to verify delivery.

### Privacy & Data Sharing

- FR35: The system can keep all data private to the paired two-person space.
- FR36: BPD and mood data are shared by default within the pair.

## Non-Functional Requirements

### Performance

- Heartbeat notification delivery p95 <= 1 second

### Reliability

- Notification delivery success rate >= 95% over a rolling 30-day window

### Security & Privacy

- All data is private to the paired two-person space
- Data is encrypted in transit (TLS)

### Scalability

- System is optimized for two users (one paired relationship)
- No scale requirements beyond the paired users in MVP

## Related Specs

- TECH-SPEC.md

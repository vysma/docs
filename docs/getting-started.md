---
sidebar_position: 2
---

# Getting Started

Let's discover **Vysma**.

Get started by **creating a new Vysma application**.

### What you'll need

- [Node.js](https://nodejs.org/en/download/) version 16.14 or above:
  - When installing Node.js, you are recommended to check all checkboxes related to dependencies.
- [VSCode](https://code.visualstudio.com/download) for TypeScript intellisense:

## Install the libraries

Basic Vysma application can be installed with two packages: the `@vysma/kernel` for registering application module, and the `@vysma/lambda` for functional programming that's fully compatible with Vysma design pattern.

```bash
npm install @vysma/kernel @vysma/lambda
```

Or using Yarn:

```bash
yarn add @vysma/kernel @vysma/lambda
```

## Understanding Vysma architecture

Vysma works by event-based mechanism,

### Vysma Source

This is the original of event emission. You can think it of a factory or the provider in other programming architecture.

Anyone can implement a basic Vysma Source

```javascript
import { createSource } from "@vysma/kernel";

const intervalSource = createSource(
  {
    events: {
      elapse: ({ value }: ClockEventPayload): ClockEventNames => null,
    },
  },
  (props: SourceProps, { emit }) => {
    let i = 0;
    const { elapse } = emit;

    return setInterval(() => {
      i++;
      elapse({
        value: i,
      });
    }, props.duration);
  }
);
```

### Vysma Trigger

While defining new Source can be a little bit tricky, but ultizing its event is pretty simple.

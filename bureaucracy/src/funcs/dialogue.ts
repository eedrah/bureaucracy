export default {
  welcomes: [
    'How can I help you today?',
    'What are you after?',
    "Hey, what's up?",
    'How are you doing?',
    'Tell me what I can do you for.',
    'Yeah?',
    'You look familiar...',
    'You again?',
  ],
  sentByResponses: [
    'Oh yeah? And what did they want?',
    'And why was that?',
    'Can you give me more info?',
    'Is there something else?',
    'What did they want now?',
    'Oh really?',
    'Go on...',
  ],
  withDataResponses: [
    'And that is?',
    'Go ahead...',
    "I'm listening",
    "I'll just write that down...",
    'Sure, you can tell me.',
    'Ok, let me get a pen.',
    'Fine, whatever.',
  ],
}

export const oneDirection: { (a: string, i: string): string }[] = [
  (a, i) =>
    `Ah, ok. Right. Can you go to ${a} and tell them your ${i}? Cheers.`,
  (a, i) => `Head to ${a} and give them your ${i}.`,
]

export const twoDirections: { (a: string, b: string, i: string): string }[] = [
  (a, b, i) =>
    `Ah, ok. Right. Can you go to either ${a} or ${b} and tell them your ${i}? Cheers.`,
  (a, b, i) =>
    `You need to head to either ${a} or ${b} and give them your ${i}.`,
  (a, b, i) => `Take your ${i} to either ${a} or ${b}, please.`,
  (a, b, i) => `Write down your ${i} and give it to either ${a} or ${b}.`,
  (a, b, i) =>
    `What's your ${i}? Yeah, either ${a} or ${b} are going to need that.`,
]

export const returnToStart = [
  "Hmmm, this data doesn't look great. I'm going to send you to Reception, and you should probably start with a new application.",
  "This isn't right... Go to Reception and they'll sort you out with a new form.",
]

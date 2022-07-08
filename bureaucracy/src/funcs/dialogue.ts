export default {
  welcomes: ['How can I help you today?'],
  sentByResponses: ['Oh yeah? And what did they want?'],
  withDataResponses: ['And that is?'],
}

export const oneDirection: { (a: string, i: string): string }[] = [
  (a, i) =>
    `Ah, ok. Right. Can you go to ${a} and tell them your ${i}? Cheers.`,
]

export const twoDirections: { (a: string, b: string, i: string): string }[] = [
  (a, b, i) =>
    `Ah, ok. Right. Can you go to either ${a} or ${b} and tell them your ${i}? Cheers.`,
]

export const returnToStart = [
  "Hmmm, this data doesn't look great. I'm going to send you to Reception, and you should probably start with a new application.",
]

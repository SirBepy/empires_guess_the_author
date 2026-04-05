## The What

Empires is a lightweight party game designed to be passed around on a single device. Each player secretly types a word or phrase, and once everyone has submitted, the app shuffles and reveals them one at a time for the group to debate and guess who wrote what.

It's installable as a PWA and works fully offline, so it's perfect for game nights without reliable internet.

## The Why

The game "Empires" is a classic party icebreaker, but it usually requires pen and paper, a bowl, and someone to manage the slips. This app replaces all of that with a single phone or tablet that gets passed around the circle. No accounts, no installs from an app store, no dependencies.

## The How

The app stores all submitted words in localStorage so a page refresh mid-game won't wipe progress. Words are shuffled using a simple Fisher-Yates-style randomization before the reveal phase begins. A service worker caches all assets at install time for full offline support.

# Custom Card — Authoring Instructions

## Basic structure

Create a table in your Google Doc or SharePoint page. The block supports up to three rows in this order:

---

## Row 1 — Header Image *(optional)*

Insert a single image into the first row. No other content should appear in this row.

| Custom Card |
|---|
| *(insert image here)* |

If you omit this row, the card starts with the content area.

**Recommended image aspect ratios:** 16:9 (default) or 1:1. Images extend to the top and corners of the card. Use the `Square` variant for a 1:1 crop (see Variants below).

---

## Row 2 — Content *(required)*

Place all content elements in a single cell, stacked vertically in this order:

| | Description | How to author |
|---|---|---|
| **Icon** | Optional small image | Insert an image on its own line, before the eyebrow |
| **Eyebrow** | Optional label above the title | Type a short line of text *before* the heading |
| **Title** | Required | Apply a Heading style (H2 or H3 recommended) |
| **Body** | Optional | Type paragraphs or insert a bulleted list below the heading |

**Example cell contents (top to bottom):**

```
[icon image]
New Feature                    ← eyebrow (plain paragraph before heading)
## Streamline Your Workflow    ← title (Heading 2)
Save hours every week with...  ← body copy
```

---

## Row 3 — Footer Actions *(optional)*

Each action is a hyperlink on its own line. The **first link** becomes the primary CTA button; any **additional links** become tertiary actions.

| |
|---|
| [Get Started](https://...) |
| [Learn More](https://...) |

Only links should appear in this row — no other text.

**Default button order:** Primary button on the left, secondary on the right. On mobile (425px and below), buttons stack vertically with the primary button on top.

To place the primary button on the right, add `Button Right Align` to the block name (see Variants below).

---

## Full example table

| Custom Card | |
|---|---|
| *(header image)* | |
| *(icon image)* <br> New Feature <br> **## Streamline Your Workflow** <br> Save hours every week with automated task management. | |
| [Get Started](https://...) <br> [Learn More](https://...) | |

---

## Layout and sizing

- Cards take up **100% width** of their container with no max-width. They are designed to be placed inside a flex/grid layout or page template alongside other cards.
- Cards automatically **grow in height** to match the tallest card in the row — footers and CTAs align along the bottom edge.
- CTA buttons **stack vertically** at 425px and below, with the primary button on top.

---

## Variants

Add one or more of the following words to the block name to apply a variant. Words can be combined (e.g. `Custom Card Navy Shadow Centered`).

### Background

| Block name suffix | Visual treatment |
|---|---|
| *(none)* | White (default) |
| `Navy` | Dark navy background, white text |
| `Neutral Gray` | Light gray background |
| `Transparent Light` | Transparent, for use on light-colored sections |
| `Transparent Dark` | Transparent, for use on dark-colored sections |

### Image aspect ratio

| Block name suffix | Crop |
|---|---|
| *(none)* | 16:9 (default) |
| `Square` | 1:1 |

### Button alignment

| Block name suffix | Behavior |
|---|---|
| *(none)* | Primary on left, secondary on right |
| `Button Right Align` | Primary on right, secondary on left |

### Content alignment

| Block name suffix | Behavior |
|---|---|
| *(none)* | Left-aligned |
| `Centered` | Content and CTAs centered |

### Elevation (drop shadow)

| Block name suffix | Shadow level |
|---|---|
| `Shadow Sm` | Subtle shadow |
| `Shadow` | Standard shadow |
| `Shadow Lg` | Prominent shadow |

---

## Tips

- The **title is always required** — the card won't have a clear purpose without it.
- Keep body copy to 2–3 sentences max for scannability.
- The header image row must contain *only* an image — adding any text or links will cause it to be treated as content instead.
- Footer links must be on their own lines with no surrounding text, otherwise the row will be treated as body copy.
- Cards are intended for use within a layout — place multiple cards in a section or columns block to form a card grid.

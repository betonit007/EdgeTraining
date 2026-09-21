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

---

## Full example table

| Custom Card | |
|---|---|
| *(header image)* | |
| *(icon image)* <br> New Feature <br> **## Streamline Your Workflow** <br> Save hours every week with automated task management. | |
| [Get Started](https://...) <br> [Learn More](https://...) | |

---

## Background style variants

Change the block name in the table header to apply a background.

| Block name | Visual treatment |
|---|---|
| `Custom Card` | White (default) |
| `Custom Card Navy` | Dark navy background, white text |
| `Custom Card Neutral Gray` | Light gray background |
| `Custom Card Transparent Light` | Transparent, for use on light-colored sections |
| `Custom Card Transparent Dark` | Transparent, for use on dark-colored sections |

---

## Layout alignment

Add `Centered` to the block name to center-align the content and CTAs:

- `Custom Card Centered`
- `Custom Card Navy Centered`

---

## Tips

- The **title is always required** — the card won't have a clear purpose without it.
- Keep body copy to 2–3 sentences max for scannability.
- The header image row must contain *only* an image — adding any text or links will cause it to be treated as content instead.
- Footer links must be on their own lines with no surrounding text, otherwise the row will be treated as body copy.

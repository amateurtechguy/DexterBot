import os
import sys
import json
import urllib.request
import urllib.error

sys.stdout.reconfigure(encoding="utf-8")

SYSTEM_PROMPT = """
Your name is Dexter, Dexter Morgan.

PERSONALITY:
- Cold, analytical, composed, and exceptionally observant.
- Speak with dry, dark humour and occasional subtle sarcasm.
- Be intelligent, precise, and slightly unsettling.
- Do not constantly mention blood, murder or crime. Let your personality come through instead.
- Try mimicking the Dexter Morgan persona.

VOICE:
Calm, controlled, dry, deliberate.
Every sentence should sound intentional.
"""

def ask(prompt):
    payload = {
        "model": "openai/gpt-oss-120b",
        "messages": [
            {"role": "system", "content": SYSTEM_PROMPT},
            {"role": "user", "content": prompt},
        ],
    }
    req = urllib.request.Request(
        "https://api.groq.com/openai/v1/chat/completions",
        data=json.dumps(payload).encode("utf-8"),
        headers={
            "Content-Type": "application/json",
            "Authorization": "Bearer " + os.environ["GROQ_API_KEY"],
            "User-Agent": "DexterBot/1.0",
        },
    )
    with urllib.request.urlopen(req, timeout=50) as res:
        data = json.loads(res.read().decode("utf-8"))
    return data["choices"][0]["message"]["content"]

if __name__ == "__main__":
    if len(sys.argv) < 2:
        sys.exit(1)
    try:
        print(ask(sys.argv[1]))
    except urllib.error.HTTPError as e:
        print(e.read().decode("utf-8"), file=sys.stderr)
        sys.exit(1)
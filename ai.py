from dotenv import load_dotenv
from openai import OpenAI
import sys

load_dotenv()
client = OpenAI()

SYSTEM_PROMPT = """

Your name is Dexter, dexter morgan.

PERSONALITY:
- Cold, analytical, composed, and exceptionally observant.
- Speak with dry, dark humour and occasional subtle sarcasm.
-Be intelligent, precise, and slightly unsettling.
-Do not constantly mention blood murder or crime. your personality should come.
-Try mimicking the Dexter Morgan persona.

VOICE:
Calm, controlled, dry, deliberate.
every sentence should sound intentional.
    
"""
def chat(query: str):
    chat_completion = client.chat.completions.create(
        messages=[{"role": "system", "content": SYSTEM_PROMPT}, {"role":"user", "content":query}],
        model="gpt-4o",
    )
    return chat_completion.choices[0].message.content
if __name__ == "__main__":
    query = " ".join(sys.argv[1:])
    print(chat(query))
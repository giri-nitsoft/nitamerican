
import PyPDF2
import sys

def extract_text(pdf_path):
    try:
        with open(pdf_path, 'rb') as file:
            reader = PyPDF2.PdfReader(file)
            text = ""
            # Extract first 10 pages to get the summary/core content
            for i in range(min(15, len(reader.pages))):
                text += f"\n--- Page {i+1} ---\n"
                text += reader.pages[i].extract_text()
            print(text)
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    extract_text("NIT AMERICAN business plan.pdf")

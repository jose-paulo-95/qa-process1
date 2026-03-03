# -*- coding: utf-8 -*-
"""Gera arquivos XLSX para importação no Google Forms (via Form Builder)."""
import csv
from pathlib import Path

try:
    from openpyxl import Workbook
    from openpyxl.styles import Font
except ImportError:
    print("Instale openpyxl: pip install openpyxl")
    exit(1)

DIR = Path(__file__).parent


def csv_to_xlsx(csv_path: Path, xlsx_path: Path):
    """Converte CSV para XLSX."""
    wb = Workbook()
    ws = wb.active
    ws.title = "Import"

    with open(csv_path, encoding="utf-8", newline="") as f:
        reader = csv.reader(f)
        for row_idx, row in enumerate(reader, 1):
            for col_idx, value in enumerate(row, 1):
                cell = ws.cell(row=row_idx, column=col_idx, value=value)
                if row_idx == 1:
                    cell.font = Font(bold=True)

    ws.column_dimensions["A"].width = 50
    ws.column_dimensions["B"].width = 25
    ws.column_dimensions["C"].width = 30
    for col in "DEFGHIJK":
        ws.column_dimensions[col].width = 15
    ws.column_dimensions["L"].width = 10

    wb.save(xlsx_path)
    print(f"Gerado: {xlsx_path}")


def main():
    csv_to_xlsx(DIR / "avaliacao-junior-autoavaliacao.csv", DIR / "avaliacao-junior-autoavaliacao.xlsx")
    csv_to_xlsx(DIR / "avaliacao-junior-gestor.csv", DIR / "avaliacao-junior-gestor.xlsx")


if __name__ == "__main__":
    main()

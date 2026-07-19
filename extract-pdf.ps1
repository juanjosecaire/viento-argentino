$pdf = Get-ChildItem "C:\Users\Usuario\Documents\proyecto-viento\documentos" | Where-Object { $_.Name -like "Potencial E*lico Patagonia (3).pdf" } | Select-Object -First 1
if (-not $pdf) { Write-Error "PDF not found"; exit 1 }
$bytes = [System.IO.File]::ReadAllBytes($pdf.FullName)
$text = [System.Text.Encoding]::Latin1.GetString($bytes)
$paren = [regex]::Matches($text, '\(([^\)]{3,500})\)')
$seen = @{}
foreach ($m in $paren) {
    $s = $m.Groups[1].Value
    $s = $s -replace '\\n', "`n"
    $s = $s -replace '\\r', ""
    $s = $s -replace '\\t', " "
    $s = $s -replace '\\\(', '('
    $s = $s -replace '\\\)', ')'
    if (-not $seen.ContainsKey($s) -and $s.Length -ge 4) {
        $seen[$s] = $true
        Write-Output $s
    }
}

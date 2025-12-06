Add-Type -AssemblyName System.Drawing

function Compress-Image {
    param (
        [string]$FilePath
    )

    try {
        $image = [System.Drawing.Image]::FromFile($FilePath)
        
        # Check if resizing is needed (e.g., width > 1920)
        $newWidth = $image.Width
        $newHeight = $image.Height
        $maxWidth = 1920

        if ($image.Width -gt $maxWidth) {
            $ratio = $maxWidth / $image.Width
            $newWidth = $maxWidth
            $newHeight = [int]($image.Height * $ratio)
        }

        # Create new bitmap
        $bitmap = new-object System.Drawing.Bitmap($newWidth, $newHeight)
        $graph = [System.Drawing.Graphics]::FromImage($bitmap)
        $graph.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
        $graph.DrawImage($image, 0, 0, $newWidth, $newHeight)
        
        # Encoder parameters for quality
        $codec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq "image/jpeg" }
        $encoderParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
        $encoderParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, [long]75)

        $tempPath = $FilePath + ".tmp.jpg"
        $bitmap.Save($tempPath, $codec, $encoderParams)
        
        $image.Dispose()
        $bitmap.Dispose()
        $graph.Dispose()

        # Replace original
        Remove-Item $FilePath
        Move-Item $tempPath $FilePath -Force
        Write-Host "Compressed: $FilePath"
    }
    catch {
        Write-Error "Failed to compress $FilePath : $_"
    }
}

$assetsPath = "d:\Tapswi\sppackage\sp-project\assets"
$images = Get-ChildItem -Path $assetsPath -Include *.jpg, *.png -Recurse

foreach ($img in $images) {
    if ($img.Length -gt 1MB) {
        Write-Host "Processing large image: $($img.Name) ($([math]::Round($img.Length / 1MB, 2)) MB)"
        Compress-Image -FilePath $img.FullName
    }
}

import { Card, CardContent, Typography, Button } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

export default function UploadCard({ onFileSelect }) {
    return (
        <Card sx={{ mb: 3, borderRadius: 3, boxShadow: 4 }}>
            <CardContent sx={{ textAlign: "center" }}>
                <CloudUploadIcon sx={{ fontSize: 48, color: "primary.main" }} />
                <Typography variant="h6" mt={1}>
                    Upload Aadhaar / PAN
                </Typography>

                <Typography variant="body2" color="text.secondary" mb={2}>
                    JPG, PNG or PDF supported
                </Typography>

                <Button variant="contained" component="label">
                    Select File
                    <input
                        hidden
                        type="file"
                        accept="image/png,image/jpeg,image/jpg,application/pdf"
                        onChange={(e) => onFileSelect(e.target.files[0])}
                    />
                </Button>
            </CardContent>
        </Card>
    );
}

import { Card, CardContent, Typography } from "@mui/material";

export default function PreviewCard({ preview }) {
    if (!preview) return null;

    return (
        <Card sx={{ mb: 3, borderRadius: 3, boxShadow: 4 }}>
            <CardContent>
                <Typography variant="h6" mb={1}>
                    Document Preview
                </Typography>

                <img
                    src={preview}
                    alt="Document Preview"
                    style={{
                        width: "100%",
                        maxHeight: 400,
                        objectFit: "contain",
                        borderRadius: 8,
                    }}
                />
            </CardContent>
        </Card>
    );
}

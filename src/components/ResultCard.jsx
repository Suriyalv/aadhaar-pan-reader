import {
    Card,
    CardContent,
    Typography,
    Alert,
    Stack,
} from "@mui/material";

export default function ResultCard({ aadhaar, pan, error, loading }) {
    if (!aadhaar && !pan && !error && !loading) return null;

    return (
        <Card sx={{ borderRadius: 3, boxShadow: 4 }}>
            <CardContent>
                {loading && <Alert severity="info">Processing document...</Alert>}

                {error && <Alert severity="error">{error}</Alert>}

                {(aadhaar || pan) && (
                    <Stack spacing={2}>
                        <Alert severity="success">Document Detected</Alert>

                        {aadhaar && (
                            <Typography variant="body1">
                                <strong>Aadhaar:</strong> {aadhaar}
                            </Typography>
                        )}

                        {pan && (
                            <Typography variant="body1">
                                <strong>PAN:</strong> {pan}
                            </Typography>
                        )}
                    </Stack>
                )}
            </CardContent>
        </Card>
    );
}

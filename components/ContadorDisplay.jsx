export default function ContadorDisplay({ count }) {
    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100px",
            width: "100px",
            fontSize: "2.5rem",
            borderRadius: "100%",
            background: "#323",
            color: "#f1f1f1"
        }}>
            {count}
        </div>
    )
} 
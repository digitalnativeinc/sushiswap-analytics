import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";

export default function BasicTable({ title, headCells, bodyCells, style }) {
  return (
    <div>
      {title && (
        <Typography variant="h6" component="h2" gutterBottom>
          {title}
        </Typography>
      )}
      <TableContainer component={Paper} variant="outlined">
        <Table aria-label="information">
          <TableHead>
            <TableRow>
              {headCells.map((cell) => (
                <TableCell
                  key={cell.key}
                  align={cell.align || "left"}
                  style={{ maxWidth: cell.maxWidth || "initial" }}
                >
                  {cell.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow key={Math.random()}>
              {bodyCells.map((cell, index) => (
                <TableCell
                  {...(index === 0 ? { component: "th", scope: "row" } : {})}
                  align={headCells[index].align || "left"}
                  style={{ maxWidth: headCells[index].maxWidth || "initial" }}
                >
                  {cell}
                </TableCell>
              ))}
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

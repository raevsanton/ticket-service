import React from "react";
import {
    Page,
    Text,
    View,
    Document,
    StyleSheet,
    Image, Font
} from "@react-pdf/renderer";

Font.register({
    family: 'Oswald',
    src: 'https://fonts.gstatic.com/s/opensans/v15/mem5YaGs126MiZpBA-UNirkOUuhs.ttf'
});

const styles = StyleSheet.create({
    page: {
        backgroundColor: "#ffffff",
        justifyContent: "center"
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1,

    },
    ticketContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        position: "relative",
        padding: 5,
        fontFamily: 'Oswald'
    },
    ticketList: {
        width: "80%",
        position: "relative",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
    },
    title: {
        position: "absolute",
        top: "150px",
        left: "50px",
        fontSize: 22
    },
    date: {
        position: "absolute",
        top: "70px",
        left: "60px"
    },
    info: {
        position: "absolute",
        top: "200px",
        left: "60px"
    }
});

export function TicketPDF(props) {
    const {data, title, artist, date} = props;
    const dataToArray = (data) => {
        return data.map((item) => {
            const info = `Row: ${item.row} | Place: ${item.place} | Price: ${item.price}`;
            const headInfo = `${title} | ${artist}`;
            return(
                <Page size={'A4'} style={styles.page}>
                    <View style={styles.ticketContainer}>
                        <View style={styles.ticketList}>
                            <Image style={styles.image} source={"https://i.ibb.co/6P7rLJq/Ticket-Design.jpg"}/>
                            <Text style={styles.title}>{headInfo}</Text>
                            <Text style={styles.date}>{date}</Text>
                            <Text style={styles.info}>{info}</Text>
                        </View>
                    </View>
                </Page>
            )
        })
    };

    return(
        <Document>
            {dataToArray(data)}
        </Document>
    );
}
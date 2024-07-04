import React, { useEffect, useState } from 'react';
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
import Axios from 'axios';
import QRCodeStyling from 'qr-code-styling';

const styles = StyleSheet.create({
  page: {
    padding: 20,
    flexDirection: 'column',
  },
  image: {
    width: '100%',
    height: 200,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  header: {
    fontSize: 20,
    marginBottom: 10,
  },
  text: {
    fontSize: 14,
  },
  qrCode: {
    marginTop: 20,
    alignSelf: 'center',
    width: 100,
    height: 100,
  },
});

const Ticket = ({ eventId, ticketId }) => {
  const [ticket, setTicket] = useState(null);
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [qrCodeUrl, setQrCodeUrl] = useState('');

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const eventRes = await Axios.get(`http://localhost:3001/api/event/${eventId}`);
        setEvent(eventRes.data);
      } catch (error) {
        console.error("Error fetching event:", error);
      }
    };

    const fetchTicket = async () => {
      try {
        const ticketRes = await Axios.get(`http://localhost:3001/api/tickets/${ticketId}`);
        setTicket(ticketRes.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching ticket:", error);
        setLoading(false);
      }
    };

    const generateQrCode = async () => {
      const qrCode = new QRCodeStyling({
        width: 100,
        height: 100,
        data: `http://localhost:3001/api/tickets/${ticketId}`,
      });

      const canvas = document.createElement('canvas');
      qrCode.append(canvas);
      setQrCodeUrl(canvas.toDataURL());
    };

    fetchEvent();
    fetchTicket();
    generateQrCode();
  }, [eventId, ticketId]);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {event && (
          <>
            <View>
              <Image
                style={styles.image}
                src={event.image}
                alt="Event Image"
              />
            </View>
            <View style={styles.section}>
              <Text style={styles.header}>{event.name}</Text>
              <Text style={styles.text}>Date & Time: {event.date}</Text>
              <Text style={styles.text}>Location: {event.location}</Text>
              <Text style={styles.text}>{event.description}</Text>
            </View>
            <View style={styles.section}>
              <Text style={styles.header}>Organizer Contact</Text>
              <Text style={styles.text}>{event.organizerContact}</Text>
            </View>
            <View style={styles.section}>
              <Text style={styles.header}>Speakers</Text>
              {event.speakers.map((speaker, index) => (
                <Text key={index} style={styles.text}>
                  {speaker.name} - {speaker.title}
                </Text>
              ))}
            </View>
            {qrCodeUrl && (
              <View style={styles.qrCode}>
                <Image src={qrCodeUrl} style={{ width: 100, height: 100 }} />
              </View>
            )}
          </>
        )}
      </Page>
    </Document>
  );
};

export default Ticket;

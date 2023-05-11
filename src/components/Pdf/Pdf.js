import {
    Page,
    Text,
    View,
    Document,
    StyleSheet,
    Image,
    Font,
  } from "@react-pdf/renderer";
  import uniqid from 'uniqid';
  
  const today = new Date();
  const date = today.toLocaleDateString();
  let id = uniqid.time('AD-');
  
  export default function Pdf(props) {
    return (
      <Document>
        <Page style={styles.body} size='LETTER'>
          <View style={styles.imageHeader}>
            <Image src="https://wastemanagementdumpsters.net/wp-content/uploads/2021/08/first-shape-slider.png" />
          </View>
  
          <View style={styles.flexbox}>
            <View style={styles.fifty}>
              <Image
                style={styles.image}
                src="https://wastemanagementdumpsters.net/wp-content/uploads/2021/08/Logo-footer.png"
              />
            </View>
  
            <View style={styles.fifty}>
              <Text style={styles.title}>QUOTE</Text>
              <View style={styles.flexbox}>
                <View style={styles.thirdTable}>
                  <View>
                    <Text style={styles.textMargin}>DATE:</Text>
                  </View>
                  <View style={styles.tableBorder}>
                    <Text style={styles.textMargin}>ID #:</Text>
                  </View>
                </View>
  
                <View style={styles.sevenTable}>
                  <View>
                    <Text style={styles.textMargin}>{date}</Text>
                  </View>
                  <View style={styles.tableBorder}>
                    <Text style={styles.textMargin}>{id}</Text>
                  </View>
                </View>
              </View>
              
            </View>
          </View>
  
          <View style={{ display: "flex", flexDirection: "row", marginTop: 30 }}>
            <Text style={styles.textIncludes}>
              (916) 444-8676{" "}
              <Image src="https://wastemanagementdumpsters.net/wp-content/uploads/2021/08/sticky.png" />{" "}
            </Text>
            <Text style={styles.textIncludes}>
              4448676@gmail.com{" "}
              <Image src="https://wastemanagementdumpsters.net/wp-content/uploads/2021/08/sticky.png" />{" "}
            </Text>
            <Text style={styles.textIncludes}>
              7140 Tokay Avenue, Sacramento, CA 95828
            </Text>
          </View>
  
          <View>
            <View style={styles.coloredHeaderTeen}>
              <Text style={styles.textMarginWhite}>Personal Information</Text>
            </View>
            <View>
              <Text style={styles.text}>Name: {props.store.FullName}</Text>
              <Text style={styles.text}>Phone: {props.store.PhoneNumber}</Text>
              <Text style={styles.text}>Email: {props.store.EmailAddress}</Text>
              <Text style={styles.text}>{props.store.AddressSelect}</Text>
            </View>
          </View>
  
          <View style={styles.section}>
            <View style={styles.coloredHeaderFiftyLeft}>
              <Text style={styles.textMarginWhite}>Item </Text>
            </View>
            <View style={styles.coloredHeaderFiftyRight}>
              <Text style={styles.textMarginWhite}>Description</Text>
            </View>
          </View>
          
          <View style={styles.sectionItem}>
            <View style={styles.fifty}>
              <Text style={styles.textBold}>Dumpster Size: </Text>
            </View>
            <View style={styles.fifty}>
              <Text style={styles.textInfo}>{props.store.DumspterSelect}</Text>
            </View>
          </View>
          
          <View style={styles.sectionItem}>
            <View style={styles.fifty}>
              <Text style={styles.textBold}>Waste Type: </Text>
            </View>
            <View style={styles.fifty}>
              <Text style={styles.textInfo}>{props.store.WasteTypeSelect}</Text>
            </View>
          </View>
          
          <View style={styles.sectionItem}>
            <View style={styles.fifty}>
              
            </View>
            <View style={styles.fifty}>
              <View style={styles.sectionItem}>
            <View style={styles.fifty}>
              <Text style={styles.textPrice}>Total: </Text>
            </View>
            <View style={styles.fifty}>
              <Text style={styles.textTotal}>${props.store.priceSelect}</Text>
            </View>
          </View>
            </View>
          </View>
  
          <View style={styles.imageFooter}>
            <Image src="https://wastemanagementdumpsters.net/wp-content/uploads/2021/08/Mask-Group-2.jpg" />
          </View>
        </Page>
      </Document>
    );
  }
  
  Font.register({
    family: "Poppins",
    src:
      "https://wastemanagementdumpsters.net/wp-content/uploads/2021/10/Poppins-Regular.ttf",
  });
  
  Font.register({
    family: "Poppinsbold",
    src:
      "https://wastemanagementdumpsters.net/wp-content/uploads/2021/10/Poppins-Bold.ttf",
  });
  
  const styles = StyleSheet.create({
    body: {
      paddingTop: 35,
      paddingBottom: 65,
      paddingHorizontal: 35,
    },
    title: {
      fontSize: 24,
      textAlign: "right",
      fontFamily: "Poppinsbold",
      color: "#327C9A",
      marginBottom: 20,
    },
    text: {
      marginTop: 10,
      fontSize: 14,
      textAlign: "justify",
      fontFamily: "Poppins",
    },
    textIncludes: {
      marginLeft: 5,
      marginTop: 5,
      fontSize: 11,
      fontFamily: "Poppins",
    },
    pageNumber: {
      position: "absolute",
      fontSize: 12,
      bottom: 30,
      left: 0,
      right: 0,
      textAlign: "center",
      color: "grey",
    },
    imageFooter: {
      position: "absolute",
      fontSize: 12,
      bottom: 0,
      left: 0,
      right: 0,
      textAlign: "center",
    },
  
    imageHeader: {
      position: "absolute",
      fontSize: 12,
      top: 0,
      left: 0,
      right: 0,
      textAlign: "center",
    },
    flexbox: {
      display: "flex",
      flexDirection: "row",
    },
  
    fifty: {
      width: "50%",
    },
    thirdTable: {
      width: "30%",
    },
  
    sevenTable: {
      width: "70%",
    },
  
    image: {
      width: 180,
    },
    textMargin: {
      marginTop: 10,
      marginLeft: 50,
      fontSize: 14,
      textTransform: "uppercase",
    },
    section: {
      marginTop: 35,
      display: "flex",
      flexDirection: "row",
    },
    coloredHeaderSeven: {
      backgroundColor: "#1D2C6D",
      width: "70%",
      borderTopLeftRadius: 10,
      borderBottomLeftRadius: 10,
    },
    coloredHeaderThree: {
      backgroundColor: "#1D2C6D",
      width: "30%",
      borderTopRightRadius: 10,
      borderBottomRightRadius: 10,
    },
    textMarginWhite: {
      marginLeft: 5,
      fontWeight: 900,
      color: "white",
      fontSize: 14,
      fontFamily: "Poppins",
    },
    coloredHeaderTeen: {
      backgroundColor: "#1D2C6D",
      width: "100%",
      borderTopLeftRadius: 10,
      borderBottomLeftRadius: 10,
      borderTopRightRadius: 10,
      borderBottomRightRadius: 10,
      textAlign: 'center',
      marginTop: 35,
    },
    coloredHeaderFiftyRight: {
      backgroundColor: "#1D2C6D",
      width: "50%",
      borderTopRightRadius: 10,
      borderBottomRightRadius: 10,
    },
    coloredHeaderFiftyLeft: {
      backgroundColor: "#1D2C6D",
      width: "50%",
      borderTopLeftRadius: 10,
      borderBottomLeftRadius: 10,
    },
    textBold: {
      fontSize: 16,
      fontFamily: "Poppinsbold",
    },
    textInfo: {
      fontSize: 14,
      fontFamily: "Poppins",
    },
    sectionItem: {
      marginTop: 15,
      display: "flex",
      flexDirection: "row",
    },
    textPrice: {
      fontSize: 26,
      fontFamily: "Poppinsbold",
      color: "#1d2c6d",
    },
    textTotal: {
      fontSize: 26,
      fontFamily: "Poppinsbold",
    },
    sectionItemTotal: {
      display: "flex",
      flexDirection: "row",
    }
  });
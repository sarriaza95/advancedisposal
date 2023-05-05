import { useContext } from "react";
import { gql, useQuery } from "@apollo/client";
import { Store } from '../../App';

const WASTETYPE = gql`
{
  wasteTypes {
    nodes {
      customFieldsWasteType {
        iconFontawesome
        name
        dumpsterSizes {
          prices10Yards {
            otherZones {
              priceForExtraDays
              tonsIncluded
              zones {
                lincoln
                roseville
              }
              daysIncluded
            }
            roundZones {
              days {
                daysIncluded
                includeTax
                priceForExtraDays
              }
              tons {
                includeTax
                pricePerTons
                tonsIncluded
              }
              zones {
                zone1
                zone2
                zone3
                zone4
              }
            }
            fieldGroupName
          }
          prices20Yards {
            otherZones {
              daysIncluded
              priceForExtraDays
              tonsIncluded
              zones {
                lincoln
                roseville
              }
            }
            roundZones {
              days {
                daysIncluded
                includeTax
                priceForExtraDays
              }
              tons {
                includeTax
                pricePerTons
                tonsIncluded
              }
              zones {
                zone1
                zone2
                zone3
                zone4
              }
            }
            fieldGroupName
          }
          prices40Yards {
            otherZones {
              daysIncluded
              priceForExtraDays
              tonsIncluded
              zones {
                lincoln
                roseville
              }
            }
            roundZones {
              days {
                daysIncluded
                includeTax
                priceForExtraDays
              }
              tons {
                includeTax
                pricePerTons
                tonsIncluded
              }
              zones {
                zone1
                zone2
                zone3
                zone4
              }
            }
            fieldGroupName
          }
        }
      }
    }
  }
}
`;

export const WasteDatas = () => {
  const store = useContext(Store);
  const { data } = useQuery(WASTETYPE, {
    onCompleted: (data) => {
      store.setWasteTypeDatas(data.wasteTypes.nodes);
    },
  });
};
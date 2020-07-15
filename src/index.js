import Senators from "./data/senators";
import { count } from "code";

export const republicans = () => {
  const republicans = Senators.filter((senator) => {
    if (senator.party === "Republican") {
      return true;
    }
  });

  return republicans;
};

export const democrats = () => {
  const democrats = Senators.filter((senator) => {
    if (senator.party === "Democrat") {
      return true;
    }
  });

  return democrats;
};

export const independents = () => {
  const independent = Senators.filter((senator) => {
    if (senator.party === "Independent") {
      return true;
    }
  });

  return independent;
};
export const males = () => {
  const male = Senators.filter((senator) => {
    if (senator.person.gender === "male") {
      return true;
    }
  });

  return male;
};

export const females = () => {
  const female = Senators.filter((senator) => {
    if (senator.person.gender === "female") {
      return true;
    }
  });

  return female;
};

export const byState = (state = "UT") => {
  const senators = Senators.filter((senator) => {
    if (state === senator.state) {
      return true;
    }
  });
  return senators;
};

export const mapping = () => {
  const simplifiedSenators = Senators.map((senator) => {
    const newSenator = {
      firstName: senator.person.firstname,
      lastname: senator.person.lastName,
      party: senator.party,
      gender: senator.person.gender,
    };

    return newSenator;
  });
  return simplifiedSenators;
};

export const reducedCount = () => {
  const partyCounts = Senators.reduce(
    (accum, senator) => {
      if (senator.party === "Republican") {
        accum.republican++;
      } else if (senator.party === "Democrat") {
        accum.democrat++;
      } else {
        accum.independent++;
      }

      return accum;
    },
    {
      republican: 0,
      democrat: 0,
      independent: 0,
    }
  );
  return partyCounts;
};

module.exports = function(sequelize, DataTypes) {
  const Job = sequelize.define("Job", {
    // The email cannot be null, and must be a proper email before creation
    client: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    contactName: {
      type: DataTypes.STRING,
      allowNull: false
    },

    contactNumber: {
      type: DataTypes.STRING,
      allowNull: false
    },

    backupContactName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    
    backupContactNumber: {
      type: DataTypes.STRING,
      allowNull: false
    },

    details: {
      type: DataTypes.STRING,
      allowNull: false
    },

    worker: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    deliveryDate: {
      type: DataTypes.STRING,
      allowNull: false
    },

    inProgress: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },

    completionDate: {
      type: DataTypes.STRING,
      allowNull: true
    }


  });

  return Job;
};

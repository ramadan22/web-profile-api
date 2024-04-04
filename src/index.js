require('dotenv').config()
const PORT = process.env.PORT || 5000;
const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const middlewareLogRequest = require('./middleware/logs');
app.use(middlewareLogRequest);

const apiKeyMiddleware = require('./middleware/x-api-key');
app.use(apiKeyMiddleware);


// route authentication
const authenticationRoutes = require('./routes/authentication');
app.use('/authentication', authenticationRoutes);


// route cms user
const usersRoutes = require('./routes/cms/users');
app.use('/cms/users', usersRoutes);

// route cms roles
const rolesRoutes = require('./routes/cms/roles');
app.use('/cms/roles', rolesRoutes);

// route cms roles
const managementRolesRoutes = require('./routes/cms/management-roles');
app.use('/cms/management-roles', managementRolesRoutes);

// route service section-opening
const serviceSectionOpening = require('./routes/services/section-opening');
app.use('/service/section-opening', serviceSectionOpening);

// route service section-educational
const serviceSectionEducational = require('./routes/services/section-educational');
app.use('/service/section-educational', serviceSectionEducational);

// route service section-educational
const serviceSectionCareerExperience = require('./routes/services/section-career-experience');
app.use('/service/section-career-experience', serviceSectionCareerExperience);


app.use((err, req, res, next) => {
  res.json({
    message: err.message
  })
})

app.listen(PORT, () => {
  console.log(`Server berhasil di running di port ${PORT}`);
})
const YoungApprentice = require('../models/YoungApprentice');
const PDFDocument = require('pdfkit');
const fs = require('fs');

const getYoungApprentices = async (req, res) => {
  try {
    const youngApprentices = await YoungApprentice.find()
      .select("-__v -createdAt -updatedAt")
      .exec();

    res.status(200).json(youngApprentices);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getYoungApprenticeById = async (req, res) => {
  const id = req.params.id;

  try {
    if (!id) {
      throw new Error('Parâmetros incorretos');
    }

    const youngApprentice = await YoungApprentice.findById(id)
      .select("-__v -createdAt -updatedAt")
      .exec();

    if (!youngApprentice) {
      return res.status(404).json({ msg: 'Jovem Aprendiz não encontrado' });
    }

    res.status(200).json(youngApprentice);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const registerYoungApprentice = async (req, res) => {
  try {
    const youngApprenticeData = req.body;

    // Verifica se todos os campos obrigatórios estão presentes no corpo da solicitação
    const requiredFields = ['class', 'name', 'role', 'instructor', 'city', 'cnpj', 'phone', 'birthDate', 'admission', 'end', 'contractPeriod', 'cpf', 'rg', 'practiceHours', 'theoreticalHours', 'model', 'active', 'contractExpiration'];
    const missingFields = requiredFields.filter(field => !youngApprenticeData[field]);

    if (missingFields.length > 0) {
        return res.status(422).json({ msg: `Campos obrigatórios ausentes: ${missingFields.join(', ')}` });
    }

    // Restante do código
    const newYoungApprentice = new YoungApprentice(youngApprenticeData);
    const savedYoungApprentice = await newYoungApprentice.save();

    res.status(201).json(savedYoungApprentice);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


const updateYoungApprentice = async (req, res) => {
  const id = req.params.id;

  try {
    if (!id) {
      throw new Error('Parâmetros incorretos');
    }

    const updatedFields = req.body;

    // Verifica se os campos opcionais estão presentes no corpo da solicitação
    const optionalFields = ['attendance', 'participation', 'interpersonalRelationships', 'goalAchievement', 'technicalSkills'];
    const missingOptionalFields = optionalFields.filter(field => updatedFields[field] === undefined);

    if (missingOptionalFields.length > 0) {
      return res.status(422).json({ msg: `Campos opcionais ausentes: ${missingOptionalFields.join(', ')}` });
    }

    const updatedYoungApprentice = await YoungApprentice.findByIdAndUpdate(
      id,
      { $set: updatedFields },
      { new: true }
    );

    if (!updatedYoungApprentice) {
      return res.status(404).json({ msg: 'Jovem Aprendiz não encontrado' });
    }

    res.json(updatedYoungApprentice);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteYoungApprentice = async (req, res) => {
  const { id } = req.params;

  try {
    if (!id) {
      throw new Error('Parâmetros incorretos');
    }

    const deletedYoungApprentice = await YoungApprentice.findByIdAndDelete(id);

    if (!deletedYoungApprentice) {
      return res.status(404).json({ msg: 'Jovem Aprendiz não encontrado' });
    }

    res.json(deletedYoungApprentice);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const generatePDF = async (req, res) => {
  const id = req.params.id;

  try {
    if (!id) {
      throw new Error('Parâmetros incorretos');
    }

    const youngApprentice = await YoungApprentice.findById(id)
      .select("-__v -createdAt -updatedAt")
      .exec();

    if (!youngApprentice) {
      return res.status(404).json({ msg: 'Jovem Aprendiz não encontrado' });
    }

    const doc = new PDFDocument();
    const filePath = `./pdfs/youngApprentice_${id}.pdf`;

    doc.pipe(fs.createWriteStream(filePath));
    doc.font('Helvetica-Bold').fontSize(20).text('Informações do Jovem Aprendiz', { align: 'center' });
    doc.moveDown();

    // Adicione mais campos conforme necessário
    doc.font('Helvetica').fontSize(14).text(`Nome: ${youngApprentice.name}`);
    doc.font('Helvetica').fontSize(14).text(`Turma: ${youngApprentice.class}`);
    doc.font('Helvetica').fontSize(14).text(`Função: ${youngApprentice.role}`);
    // Adicione os campos adicionais aqui...

    doc.end();

    res.status(200).json({ msg: 'PDF gerado com sucesso', filePath });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getYoungApprentices,
  getYoungApprenticeById,
  registerYoungApprentice,
  updateYoungApprentice,
  deleteYoungApprentice,
  generatePDF,
};

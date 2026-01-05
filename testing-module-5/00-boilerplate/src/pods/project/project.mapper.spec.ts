import * as apiModel from './api/project.api-model';
import { mapProjectFromApiToVm } from './project.mapper';
import * as viewModel from './project.vm';

describe('Project Mapper Specs', () => {
  it('should map EmployeeSummary from API to ViewModel correctly', () => {
    // Arrange
    const apiProject: apiModel.Project = {
      id: 'proj1',
      name: 'Project One',
      isActive: true,
      employees: [
        { id: 'id1', employeeName: 'Ana', isAssigned: true },
        { id: 'id2', employeeName: 'Luis' },
      ],
    };

    // Act
    const result = mapProjectFromApiToVm(apiProject);

    // Assert
    const expectedResult: viewModel.Project = {
      id: 'proj1',
      name: 'Project One',
      isActive: true,
      employees: [
        { id: 'id1', employeeName: 'Ana', isAssigned: true },
        { id: 'id2', employeeName: 'Luis' },
      ],
    };
    expect(result).toEqual(expectedResult);

  })
  it('should map EmployeeSummary from API to entyProject', () => {
    // Act
    const result = mapProjectFromApiToVm(undefined);

    // Assert
    const expectedResult: viewModel.Project = {
      id: '',
      name: '',
      externalId: '',
      comments: '',
      isActive: false,
      employees: [],
    };
    expect(result).toEqual(expectedResult);

  })
});
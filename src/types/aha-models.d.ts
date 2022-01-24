declare namespace Aha {
  type AttachmentSizeEnum_MINI = 'MINI';
type AttachmentSizeEnum_MEDIUM = 'MEDIUM';
type AttachmentSizeEnum_ORIGINAL = 'ORIGINAL';
interface AttachmentSizeEnum {
  values: AttachmentSizeEnum_MINI | AttachmentSizeEnum_MEDIUM | AttachmentSizeEnum_ORIGINAL;
  MINI: EnumValue<"AttachmentSizeEnum", AttachmentSizeEnum_MINI>;
MEDIUM: EnumValue<"AttachmentSizeEnum", AttachmentSizeEnum_MEDIUM>;
ORIGINAL: EnumValue<"AttachmentSizeEnum", AttachmentSizeEnum_ORIGINAL>;
}

type AvatarSizeEnum_SIZE_16 = 'SIZE_16';
type AvatarSizeEnum_SIZE_24 = 'SIZE_24';
type AvatarSizeEnum_SIZE_32 = 'SIZE_32';
type AvatarSizeEnum_SIZE_40 = 'SIZE_40';
type AvatarSizeEnum_SIZE_160 = 'SIZE_160';
interface AvatarSizeEnum {
  values: AvatarSizeEnum_SIZE_16 | AvatarSizeEnum_SIZE_24 | AvatarSizeEnum_SIZE_32 | AvatarSizeEnum_SIZE_40 | AvatarSizeEnum_SIZE_160;
  SIZE_16: EnumValue<"AvatarSizeEnum", AvatarSizeEnum_SIZE_16>;
SIZE_24: EnumValue<"AvatarSizeEnum", AvatarSizeEnum_SIZE_24>;
SIZE_32: EnumValue<"AvatarSizeEnum", AvatarSizeEnum_SIZE_32>;
SIZE_40: EnumValue<"AvatarSizeEnum", AvatarSizeEnum_SIZE_40>;
SIZE_160: EnumValue<"AvatarSizeEnum", AvatarSizeEnum_SIZE_160>;
}

type CustomFieldableTypeEnum_Project = 'Project';
type CustomFieldableTypeEnum_Release = 'Release';
type CustomFieldableTypeEnum_Epic = 'Epic';
type CustomFieldableTypeEnum_Feature = 'Feature';
type CustomFieldableTypeEnum_Requirement = 'Requirement';
interface CustomFieldableTypeEnum {
  values: CustomFieldableTypeEnum_Project | CustomFieldableTypeEnum_Release | CustomFieldableTypeEnum_Epic | CustomFieldableTypeEnum_Feature | CustomFieldableTypeEnum_Requirement;
  Project: EnumValue<"CustomFieldableTypeEnum", CustomFieldableTypeEnum_Project>;
Release: EnumValue<"CustomFieldableTypeEnum", CustomFieldableTypeEnum_Release>;
Epic: EnumValue<"CustomFieldableTypeEnum", CustomFieldableTypeEnum_Epic>;
Feature: EnumValue<"CustomFieldableTypeEnum", CustomFieldableTypeEnum_Feature>;
Requirement: EnumValue<"CustomFieldableTypeEnum", CustomFieldableTypeEnum_Requirement>;
}

type EpicOrder_workflowBoardPosition = 'workflowBoardPosition';
type EpicOrder_createdAt = 'createdAt';
type EpicOrder_position = 'position';
interface EpicOrder {
  values: EpicOrder_workflowBoardPosition | EpicOrder_createdAt | EpicOrder_position;
  workflowBoardPosition: EnumValue<"EpicOrder", EpicOrder_workflowBoardPosition>;
createdAt: EnumValue<"EpicOrder", EpicOrder_createdAt>;
position: EnumValue<"EpicOrder", EpicOrder_position>;
}

type ExtensionFieldableTypeEnum_EPIC = 'EPIC';
type ExtensionFieldableTypeEnum_FEATURE = 'FEATURE';
type ExtensionFieldableTypeEnum_REQUIREMENT = 'REQUIREMENT';
interface ExtensionFieldableTypeEnum {
  values: ExtensionFieldableTypeEnum_EPIC | ExtensionFieldableTypeEnum_FEATURE | ExtensionFieldableTypeEnum_REQUIREMENT;
  EPIC: EnumValue<"ExtensionFieldableTypeEnum", ExtensionFieldableTypeEnum_EPIC>;
FEATURE: EnumValue<"ExtensionFieldableTypeEnum", ExtensionFieldableTypeEnum_FEATURE>;
REQUIREMENT: EnumValue<"ExtensionFieldableTypeEnum", ExtensionFieldableTypeEnum_REQUIREMENT>;
}

type FeatureOrder_workflowBoardPosition = 'workflowBoardPosition';
type FeatureOrder_createdAt = 'createdAt';
type FeatureOrder_updatedAt = 'updatedAt';
type FeatureOrder_position = 'position';
type FeatureOrder_featureBoardPosition = 'featureBoardPosition';
interface FeatureOrder {
  values: FeatureOrder_workflowBoardPosition | FeatureOrder_createdAt | FeatureOrder_updatedAt | FeatureOrder_position | FeatureOrder_featureBoardPosition;
  workflowBoardPosition: EnumValue<"FeatureOrder", FeatureOrder_workflowBoardPosition>;
createdAt: EnumValue<"FeatureOrder", FeatureOrder_createdAt>;
updatedAt: EnumValue<"FeatureOrder", FeatureOrder_updatedAt>;
position: EnumValue<"FeatureOrder", FeatureOrder_position>;
featureBoardPosition: EnumValue<"FeatureOrder", FeatureOrder_featureBoardPosition>;
}

type InternalMeaning_NOT_STARTED = 'NOT_STARTED';
type InternalMeaning_IN_PROGRESS = 'IN_PROGRESS';
type InternalMeaning_DONE = 'DONE';
type InternalMeaning_SHIPPED = 'SHIPPED';
type InternalMeaning_WONT_DO = 'WONT_DO';
type InternalMeaning_ALREADY_EXISTS = 'ALREADY_EXISTS';
interface InternalMeaning {
  values: InternalMeaning_NOT_STARTED | InternalMeaning_IN_PROGRESS | InternalMeaning_DONE | InternalMeaning_SHIPPED | InternalMeaning_WONT_DO | InternalMeaning_ALREADY_EXISTS;
  NOT_STARTED: EnumValue<"InternalMeaning", InternalMeaning_NOT_STARTED>;
IN_PROGRESS: EnumValue<"InternalMeaning", InternalMeaning_IN_PROGRESS>;
DONE: EnumValue<"InternalMeaning", InternalMeaning_DONE>;
SHIPPED: EnumValue<"InternalMeaning", InternalMeaning_SHIPPED>;
WONT_DO: EnumValue<"InternalMeaning", InternalMeaning_WONT_DO>;
ALREADY_EXISTS: EnumValue<"InternalMeaning", InternalMeaning_ALREADY_EXISTS>;
}

type IterationOrder_startDate = 'startDate';
interface IterationOrder {
  values: IterationOrder_startDate;
  startDate: EnumValue<"IterationOrder", IterationOrder_startDate>;
}

type NotificationOrder_createdAt = 'createdAt';
interface NotificationOrder {
  values: NotificationOrder_createdAt;
  createdAt: EnumValue<"NotificationOrder", NotificationOrder_createdAt>;
}

type NotificationReadEnum_READ = 'READ';
type NotificationReadEnum_UNREAD = 'UNREAD';
interface NotificationReadEnum {
  values: NotificationReadEnum_READ | NotificationReadEnum_UNREAD;
  READ: EnumValue<"NotificationReadEnum", NotificationReadEnum_READ>;
UNREAD: EnumValue<"NotificationReadEnum", NotificationReadEnum_UNREAD>;
}

type NotificationScopeEnum_PARTICIPATING = 'PARTICIPATING';
type NotificationScopeEnum_WATCHING = 'WATCHING';
interface NotificationScopeEnum {
  values: NotificationScopeEnum_PARTICIPATING | NotificationScopeEnum_WATCHING;
  PARTICIPATING: EnumValue<"NotificationScopeEnum", NotificationScopeEnum_PARTICIPATING>;
WATCHING: EnumValue<"NotificationScopeEnum", NotificationScopeEnum_WATCHING>;
}

type NotificationStarredEnum_STARRED = 'STARRED';
type NotificationStarredEnum_UNSTARRED = 'UNSTARRED';
interface NotificationStarredEnum {
  values: NotificationStarredEnum_STARRED | NotificationStarredEnum_UNSTARRED;
  STARRED: EnumValue<"NotificationStarredEnum", NotificationStarredEnum_STARRED>;
UNSTARRED: EnumValue<"NotificationStarredEnum", NotificationStarredEnum_UNSTARRED>;
}

type NotificationTypeEnum_Comment = 'Comment';
type NotificationTypeEnum_Project = 'Project';
type NotificationTypeEnum_Task = 'Task';
type NotificationTypeEnum_Release = 'Release';
type NotificationTypeEnum_Epic = 'Epic';
type NotificationTypeEnum_Feature = 'Feature';
interface NotificationTypeEnum {
  values: NotificationTypeEnum_Comment | NotificationTypeEnum_Project | NotificationTypeEnum_Task | NotificationTypeEnum_Release | NotificationTypeEnum_Epic | NotificationTypeEnum_Feature;
  Comment: EnumValue<"NotificationTypeEnum", NotificationTypeEnum_Comment>;
Project: EnumValue<"NotificationTypeEnum", NotificationTypeEnum_Project>;
Task: EnumValue<"NotificationTypeEnum", NotificationTypeEnum_Task>;
Release: EnumValue<"NotificationTypeEnum", NotificationTypeEnum_Release>;
Epic: EnumValue<"NotificationTypeEnum", NotificationTypeEnum_Epic>;
Feature: EnumValue<"NotificationTypeEnum", NotificationTypeEnum_Feature>;
}

type OrderDirection_ASC = 'ASC';
type OrderDirection_DESC = 'DESC';
interface OrderDirection {
  values: OrderDirection_ASC | OrderDirection_DESC;
  ASC: EnumValue<"OrderDirection", OrderDirection_ASC>;
DESC: EnumValue<"OrderDirection", OrderDirection_DESC>;
}

type RecordEventGroupByEnum_ITERATION_ID = 'ITERATION_ID';
type RecordEventGroupByEnum_RELEASE_ID = 'RELEASE_ID';
type RecordEventGroupByEnum_EPIC_ID = 'EPIC_ID';
type RecordEventGroupByEnum_FEATURE_ID = 'FEATURE_ID';
type RecordEventGroupByEnum_REQUIREMENT_ID = 'REQUIREMENT_ID';
type RecordEventGroupByEnum_TEAM_ID = 'TEAM_ID';
type RecordEventGroupByEnum_TEAM_WORKFLOW_STATUS_ID = 'TEAM_WORKFLOW_STATUS_ID';
interface RecordEventGroupByEnum {
  values: RecordEventGroupByEnum_ITERATION_ID | RecordEventGroupByEnum_RELEASE_ID | RecordEventGroupByEnum_EPIC_ID | RecordEventGroupByEnum_FEATURE_ID | RecordEventGroupByEnum_REQUIREMENT_ID | RecordEventGroupByEnum_TEAM_ID | RecordEventGroupByEnum_TEAM_WORKFLOW_STATUS_ID;
  ITERATION_ID: EnumValue<"RecordEventGroupByEnum", RecordEventGroupByEnum_ITERATION_ID>;
RELEASE_ID: EnumValue<"RecordEventGroupByEnum", RecordEventGroupByEnum_RELEASE_ID>;
EPIC_ID: EnumValue<"RecordEventGroupByEnum", RecordEventGroupByEnum_EPIC_ID>;
FEATURE_ID: EnumValue<"RecordEventGroupByEnum", RecordEventGroupByEnum_FEATURE_ID>;
REQUIREMENT_ID: EnumValue<"RecordEventGroupByEnum", RecordEventGroupByEnum_REQUIREMENT_ID>;
TEAM_ID: EnumValue<"RecordEventGroupByEnum", RecordEventGroupByEnum_TEAM_ID>;
TEAM_WORKFLOW_STATUS_ID: EnumValue<"RecordEventGroupByEnum", RecordEventGroupByEnum_TEAM_WORKFLOW_STATUS_ID>;
}

type RecordEventSubjectEnum_Iteration = 'Iteration';
type RecordEventSubjectEnum_Release = 'Release';
type RecordEventSubjectEnum_Epic = 'Epic';
type RecordEventSubjectEnum_Feature = 'Feature';
type RecordEventSubjectEnum_Requirement = 'Requirement';
interface RecordEventSubjectEnum {
  values: RecordEventSubjectEnum_Iteration | RecordEventSubjectEnum_Release | RecordEventSubjectEnum_Epic | RecordEventSubjectEnum_Feature | RecordEventSubjectEnum_Requirement;
  Iteration: EnumValue<"RecordEventSubjectEnum", RecordEventSubjectEnum_Iteration>;
Release: EnumValue<"RecordEventSubjectEnum", RecordEventSubjectEnum_Release>;
Epic: EnumValue<"RecordEventSubjectEnum", RecordEventSubjectEnum_Epic>;
Feature: EnumValue<"RecordEventSubjectEnum", RecordEventSubjectEnum_Feature>;
Requirement: EnumValue<"RecordEventSubjectEnum", RecordEventSubjectEnum_Requirement>;
}

type RecordEventTimeSeriesGroupEnum_HOUR = 'HOUR';
type RecordEventTimeSeriesGroupEnum_DAY = 'DAY';
type RecordEventTimeSeriesGroupEnum_WEEK = 'WEEK';
type RecordEventTimeSeriesGroupEnum_MONTH = 'MONTH';
interface RecordEventTimeSeriesGroupEnum {
  values: RecordEventTimeSeriesGroupEnum_HOUR | RecordEventTimeSeriesGroupEnum_DAY | RecordEventTimeSeriesGroupEnum_WEEK | RecordEventTimeSeriesGroupEnum_MONTH;
  HOUR: EnumValue<"RecordEventTimeSeriesGroupEnum", RecordEventTimeSeriesGroupEnum_HOUR>;
DAY: EnumValue<"RecordEventTimeSeriesGroupEnum", RecordEventTimeSeriesGroupEnum_DAY>;
WEEK: EnumValue<"RecordEventTimeSeriesGroupEnum", RecordEventTimeSeriesGroupEnum_WEEK>;
MONTH: EnumValue<"RecordEventTimeSeriesGroupEnum", RecordEventTimeSeriesGroupEnum_MONTH>;
}

type RecordEventTypeEnum_ITERATION_START = 'ITERATION_START';
type RecordEventTypeEnum_ITERATION_COMPLETED = 'ITERATION_COMPLETED';
type RecordEventTypeEnum_ITERATION_CAPACITY_CHANGED = 'ITERATION_CAPACITY_CHANGED';
type RecordEventTypeEnum_RELEASE_CAPACITY_CHANGED = 'RELEASE_CAPACITY_CHANGED';
type RecordEventTypeEnum_EPIC_CAPACITY_CHANGED = 'EPIC_CAPACITY_CHANGED';
type RecordEventTypeEnum_FEATURE_CAPACITY_CHANGED = 'FEATURE_CAPACITY_CHANGED';
type RecordEventTypeEnum_REQUIREMENT_CAPACITY_CHANGED = 'REQUIREMENT_CAPACITY_CHANGED';
type RecordEventTypeEnum_RECORD_WORK_DONE = 'RECORD_WORK_DONE';
type RecordEventTypeEnum_RECORD_ESTIMATE_CHANGED = 'RECORD_ESTIMATE_CHANGED';
type RecordEventTypeEnum_RECORD_REMAINING_CHANGED = 'RECORD_REMAINING_CHANGED';
type RecordEventTypeEnum_RECORD_COMPLETED = 'RECORD_COMPLETED';
type RecordEventTypeEnum_RECORD_RESTARTED = 'RECORD_RESTARTED';
type RecordEventTypeEnum_RECORD_ADDED_TO_ITERATION = 'RECORD_ADDED_TO_ITERATION';
type RecordEventTypeEnum_RECORD_REMOVED_FROM_ITERATION = 'RECORD_REMOVED_FROM_ITERATION';
type RecordEventTypeEnum_RECORD_ADDED_TO_RELEASE = 'RECORD_ADDED_TO_RELEASE';
type RecordEventTypeEnum_RECORD_REMOVED_FROM_RELEASE = 'RECORD_REMOVED_FROM_RELEASE';
type RecordEventTypeEnum_RECORD_ADDED_TO_EPIC = 'RECORD_ADDED_TO_EPIC';
type RecordEventTypeEnum_RECORD_REMOVED_FROM_EPIC = 'RECORD_REMOVED_FROM_EPIC';
type RecordEventTypeEnum_RECORD_ADDED_TO_FEATURE = 'RECORD_ADDED_TO_FEATURE';
type RecordEventTypeEnum_RECORD_REMOVED_FROM_FEATURE = 'RECORD_REMOVED_FROM_FEATURE';
type RecordEventTypeEnum_RECORD_ADDED_TO_TEAM = 'RECORD_ADDED_TO_TEAM';
type RecordEventTypeEnum_RECORD_REMOVED_FROM_TEAM = 'RECORD_REMOVED_FROM_TEAM';
type RecordEventTypeEnum_RECORD_ADDED_TO_TEAM_WORKFLOW_STATUS = 'RECORD_ADDED_TO_TEAM_WORKFLOW_STATUS';
type RecordEventTypeEnum_RECORD_REMOVED_FROM_TEAM_WORKFLOW_STATUS = 'RECORD_REMOVED_FROM_TEAM_WORKFLOW_STATUS';
type RecordEventTypeEnum_RECORD_ADDED_TO_ASSIGNED_USER = 'RECORD_ADDED_TO_ASSIGNED_USER';
type RecordEventTypeEnum_RECORD_REMOVED_FROM_ASSIGNED_USER = 'RECORD_REMOVED_FROM_ASSIGNED_USER';
interface RecordEventTypeEnum {
  values: RecordEventTypeEnum_ITERATION_START | RecordEventTypeEnum_ITERATION_COMPLETED | RecordEventTypeEnum_ITERATION_CAPACITY_CHANGED | RecordEventTypeEnum_RELEASE_CAPACITY_CHANGED | RecordEventTypeEnum_EPIC_CAPACITY_CHANGED | RecordEventTypeEnum_FEATURE_CAPACITY_CHANGED | RecordEventTypeEnum_REQUIREMENT_CAPACITY_CHANGED | RecordEventTypeEnum_RECORD_WORK_DONE | RecordEventTypeEnum_RECORD_ESTIMATE_CHANGED | RecordEventTypeEnum_RECORD_REMAINING_CHANGED | RecordEventTypeEnum_RECORD_COMPLETED | RecordEventTypeEnum_RECORD_RESTARTED | RecordEventTypeEnum_RECORD_ADDED_TO_ITERATION | RecordEventTypeEnum_RECORD_REMOVED_FROM_ITERATION | RecordEventTypeEnum_RECORD_ADDED_TO_RELEASE | RecordEventTypeEnum_RECORD_REMOVED_FROM_RELEASE | RecordEventTypeEnum_RECORD_ADDED_TO_EPIC | RecordEventTypeEnum_RECORD_REMOVED_FROM_EPIC | RecordEventTypeEnum_RECORD_ADDED_TO_FEATURE | RecordEventTypeEnum_RECORD_REMOVED_FROM_FEATURE | RecordEventTypeEnum_RECORD_ADDED_TO_TEAM | RecordEventTypeEnum_RECORD_REMOVED_FROM_TEAM | RecordEventTypeEnum_RECORD_ADDED_TO_TEAM_WORKFLOW_STATUS | RecordEventTypeEnum_RECORD_REMOVED_FROM_TEAM_WORKFLOW_STATUS | RecordEventTypeEnum_RECORD_ADDED_TO_ASSIGNED_USER | RecordEventTypeEnum_RECORD_REMOVED_FROM_ASSIGNED_USER;
  ITERATION_START: EnumValue<"RecordEventTypeEnum", RecordEventTypeEnum_ITERATION_START>;
ITERATION_COMPLETED: EnumValue<"RecordEventTypeEnum", RecordEventTypeEnum_ITERATION_COMPLETED>;
ITERATION_CAPACITY_CHANGED: EnumValue<"RecordEventTypeEnum", RecordEventTypeEnum_ITERATION_CAPACITY_CHANGED>;
RELEASE_CAPACITY_CHANGED: EnumValue<"RecordEventTypeEnum", RecordEventTypeEnum_RELEASE_CAPACITY_CHANGED>;
EPIC_CAPACITY_CHANGED: EnumValue<"RecordEventTypeEnum", RecordEventTypeEnum_EPIC_CAPACITY_CHANGED>;
FEATURE_CAPACITY_CHANGED: EnumValue<"RecordEventTypeEnum", RecordEventTypeEnum_FEATURE_CAPACITY_CHANGED>;
REQUIREMENT_CAPACITY_CHANGED: EnumValue<"RecordEventTypeEnum", RecordEventTypeEnum_REQUIREMENT_CAPACITY_CHANGED>;
RECORD_WORK_DONE: EnumValue<"RecordEventTypeEnum", RecordEventTypeEnum_RECORD_WORK_DONE>;
RECORD_ESTIMATE_CHANGED: EnumValue<"RecordEventTypeEnum", RecordEventTypeEnum_RECORD_ESTIMATE_CHANGED>;
RECORD_REMAINING_CHANGED: EnumValue<"RecordEventTypeEnum", RecordEventTypeEnum_RECORD_REMAINING_CHANGED>;
RECORD_COMPLETED: EnumValue<"RecordEventTypeEnum", RecordEventTypeEnum_RECORD_COMPLETED>;
RECORD_RESTARTED: EnumValue<"RecordEventTypeEnum", RecordEventTypeEnum_RECORD_RESTARTED>;
RECORD_ADDED_TO_ITERATION: EnumValue<"RecordEventTypeEnum", RecordEventTypeEnum_RECORD_ADDED_TO_ITERATION>;
RECORD_REMOVED_FROM_ITERATION: EnumValue<"RecordEventTypeEnum", RecordEventTypeEnum_RECORD_REMOVED_FROM_ITERATION>;
RECORD_ADDED_TO_RELEASE: EnumValue<"RecordEventTypeEnum", RecordEventTypeEnum_RECORD_ADDED_TO_RELEASE>;
RECORD_REMOVED_FROM_RELEASE: EnumValue<"RecordEventTypeEnum", RecordEventTypeEnum_RECORD_REMOVED_FROM_RELEASE>;
RECORD_ADDED_TO_EPIC: EnumValue<"RecordEventTypeEnum", RecordEventTypeEnum_RECORD_ADDED_TO_EPIC>;
RECORD_REMOVED_FROM_EPIC: EnumValue<"RecordEventTypeEnum", RecordEventTypeEnum_RECORD_REMOVED_FROM_EPIC>;
RECORD_ADDED_TO_FEATURE: EnumValue<"RecordEventTypeEnum", RecordEventTypeEnum_RECORD_ADDED_TO_FEATURE>;
RECORD_REMOVED_FROM_FEATURE: EnumValue<"RecordEventTypeEnum", RecordEventTypeEnum_RECORD_REMOVED_FROM_FEATURE>;
RECORD_ADDED_TO_TEAM: EnumValue<"RecordEventTypeEnum", RecordEventTypeEnum_RECORD_ADDED_TO_TEAM>;
RECORD_REMOVED_FROM_TEAM: EnumValue<"RecordEventTypeEnum", RecordEventTypeEnum_RECORD_REMOVED_FROM_TEAM>;
RECORD_ADDED_TO_TEAM_WORKFLOW_STATUS: EnumValue<"RecordEventTypeEnum", RecordEventTypeEnum_RECORD_ADDED_TO_TEAM_WORKFLOW_STATUS>;
RECORD_REMOVED_FROM_TEAM_WORKFLOW_STATUS: EnumValue<"RecordEventTypeEnum", RecordEventTypeEnum_RECORD_REMOVED_FROM_TEAM_WORKFLOW_STATUS>;
RECORD_ADDED_TO_ASSIGNED_USER: EnumValue<"RecordEventTypeEnum", RecordEventTypeEnum_RECORD_ADDED_TO_ASSIGNED_USER>;
RECORD_REMOVED_FROM_ASSIGNED_USER: EnumValue<"RecordEventTypeEnum", RecordEventTypeEnum_RECORD_REMOVED_FROM_ASSIGNED_USER>;
}

type RecordEventValueOperationEnum_SUM = 'SUM';
type RecordEventValueOperationEnum_MIN = 'MIN';
type RecordEventValueOperationEnum_MAX = 'MAX';
type RecordEventValueOperationEnum_AVG = 'AVG';
interface RecordEventValueOperationEnum {
  values: RecordEventValueOperationEnum_SUM | RecordEventValueOperationEnum_MIN | RecordEventValueOperationEnum_MAX | RecordEventValueOperationEnum_AVG;
  SUM: EnumValue<"RecordEventValueOperationEnum", RecordEventValueOperationEnum_SUM>;
MIN: EnumValue<"RecordEventValueOperationEnum", RecordEventValueOperationEnum_MIN>;
MAX: EnumValue<"RecordEventValueOperationEnum", RecordEventValueOperationEnum_MAX>;
AVG: EnumValue<"RecordEventValueOperationEnum", RecordEventValueOperationEnum_AVG>;
}

type RecordPlacementEnum_TOP = 'TOP';
type RecordPlacementEnum_BOTTOM = 'BOTTOM';
interface RecordPlacementEnum {
  values: RecordPlacementEnum_TOP | RecordPlacementEnum_BOTTOM;
  TOP: EnumValue<"RecordPlacementEnum", RecordPlacementEnum_TOP>;
BOTTOM: EnumValue<"RecordPlacementEnum", RecordPlacementEnum_BOTTOM>;
}

type ReleaseOrder_featuresBoardOrder = 'featuresBoardOrder';
interface ReleaseOrder {
  values: ReleaseOrder_featuresBoardOrder;
  featuresBoardOrder: EnumValue<"ReleaseOrder", ReleaseOrder_featuresBoardOrder>;
}

type RequirementOrder_workflowBoardPosition = 'workflowBoardPosition';
type RequirementOrder_createdAt = 'createdAt';
type RequirementOrder_updatedAt = 'updatedAt';
type RequirementOrder_position = 'position';
interface RequirementOrder {
  values: RequirementOrder_workflowBoardPosition | RequirementOrder_createdAt | RequirementOrder_updatedAt | RequirementOrder_position;
  workflowBoardPosition: EnumValue<"RequirementOrder", RequirementOrder_workflowBoardPosition>;
createdAt: EnumValue<"RequirementOrder", RequirementOrder_createdAt>;
updatedAt: EnumValue<"RequirementOrder", RequirementOrder_updatedAt>;
position: EnumValue<"RequirementOrder", RequirementOrder_position>;
}

type TaskStatusEnum_PENDING = 'PENDING';
type TaskStatusEnum_COMPLETE = 'COMPLETE';
type TaskStatusEnum_APPROVED = 'APPROVED';
type TaskStatusEnum_APPROVED_CONDITIONALLY = 'APPROVED_CONDITIONALLY';
type TaskStatusEnum_REJECTED = 'REJECTED';
type TaskStatusEnum_SKIPPED = 'SKIPPED';
interface TaskStatusEnum {
  values: TaskStatusEnum_PENDING | TaskStatusEnum_COMPLETE | TaskStatusEnum_APPROVED | TaskStatusEnum_APPROVED_CONDITIONALLY | TaskStatusEnum_REJECTED | TaskStatusEnum_SKIPPED;
  PENDING: EnumValue<"TaskStatusEnum", TaskStatusEnum_PENDING>;
COMPLETE: EnumValue<"TaskStatusEnum", TaskStatusEnum_COMPLETE>;
APPROVED: EnumValue<"TaskStatusEnum", TaskStatusEnum_APPROVED>;
APPROVED_CONDITIONALLY: EnumValue<"TaskStatusEnum", TaskStatusEnum_APPROVED_CONDITIONALLY>;
REJECTED: EnumValue<"TaskStatusEnum", TaskStatusEnum_REJECTED>;
SKIPPED: EnumValue<"TaskStatusEnum", TaskStatusEnum_SKIPPED>;
}

type TaskUserOrder_completedDate = 'completedDate';
interface TaskUserOrder {
  values: TaskUserOrder_completedDate;
  completedDate: EnumValue<"TaskUserOrder", TaskUserOrder_completedDate>;
}

type TeamAssignableTypeEnum_Epic = 'Epic';
type TeamAssignableTypeEnum_Feature = 'Feature';
type TeamAssignableTypeEnum_Requirement = 'Requirement';
interface TeamAssignableTypeEnum {
  values: TeamAssignableTypeEnum_Epic | TeamAssignableTypeEnum_Feature | TeamAssignableTypeEnum_Requirement;
  Epic: EnumValue<"TeamAssignableTypeEnum", TeamAssignableTypeEnum_Epic>;
Feature: EnumValue<"TeamAssignableTypeEnum", TeamAssignableTypeEnum_Feature>;
Requirement: EnumValue<"TeamAssignableTypeEnum", TeamAssignableTypeEnum_Requirement>;
}

type WorkUnitEnum_MINUTES = 'MINUTES';
type WorkUnitEnum_POINTS = 'POINTS';
interface WorkUnitEnum {
  values: WorkUnitEnum_MINUTES | WorkUnitEnum_POINTS;
  MINUTES: EnumValue<"WorkUnitEnum", WorkUnitEnum_MINUTES>;
POINTS: EnumValue<"WorkUnitEnum", WorkUnitEnum_POINTS>;
}

type AttachmentSubjectUnion = Note;
type CommentableSubjectUnion = Epic | Feature | Iteration | Project | Release | Requirement | Task | Unimplemented;
type CustomFieldValueRecordSubjectUnion = Epic | Feature | Project | Release | Requirement;
type ExtensionFieldableSubjectUnion = Account | Epic | Feature | Project | Requirement | User;
type NoteRecordSubjectUnion = Attachment | Epic | Feature | Iteration | Release | Requirement;
type NotifiableSubjectUnion = Comment | Epic | Feature | Project | Release | Task | Unimplemented;
type RecordUnion = Epic | Feature | Requirement;
type RecordEventSubjectUnion = Epic | Feature | Iteration | Release | Requirement | Unimplemented;
type TaskableSubjectUnion = Epic | Feature | Iteration | Release | Requirement;
type CapacityEstimateInterface = Epic | Feature | Requirement;
type CustomFieldValuesInterface = Epic | Feature | Project | Release | Requirement;
type DescriptionInterface = Epic | Feature | Iteration | Requirement;
type ExtensionFieldsInterface = Account | Epic | Feature | Project | Requirement | User;
type ReferenceInterface = Epic | Feature | Release | Requirement;
type TaskableInterface = Epic | Feature | Iteration | Release | Requirement;
type TimestampsInterface = Account | Attachment | Comment | CustomFieldValue | Epic | Extension | ExtensionContribution | ExtensionField | ExtensionInvocation | ExtensionLog | Feature | Iteration | Notification | Project | RecordEventRaw | Release | Requirement | Task | TaskUser | User | Workflow | WorkflowKind | WorkflowStatus;
type UserAssignableInterface = Epic | Feature | Requirement;
/**
  * Attributes for Account
  * @category Aha! Model Attributes
  */
interface AccountAttributes {
  readonly createdAt: string;
readonly id: string;
readonly updatedAt: string;
/**
 * Additional data stored by extensions
 */

readonly extensionFields: Array<ExtensionField>;
}

type AccountQuery = Query<Account, never>;

/**
  * Account Aha! model
  *
  * An Aha! account
  *
  * Instance type: [[Account]]
  *
  * @category Aha! Model
  */
interface AccountConstructor extends ApplicationModelConstructor<
  Account,
  never
> {};

/**
  * Account Aha! model
  *
  * An Aha! account
  *
  * Constructor: [[AccountConstructor]]
  *
  * @category Aha! Model Instance
  */
interface Account extends ApplicationModel, AccountAttributes, HasExtensionFields {
  readonly typename: 'Account';

  readonly query: AccountQuery;

  attributes: AccountAttributes;

  
}

/**
  * Attributes for Attachment
  * @category Aha! Model Attributes
  */
interface AttachmentAttributes {
  /**
 * Content type
 */

readonly contentType: string;
readonly createdAt: string;
/**
 * The url for accessing the file data
 */

readonly downloadUrl: string;
/**
 * File name
 */

readonly fileName: string;
/**
 * File size
 */

readonly fileSize: number;
readonly id: string;
readonly updatedAt: string;
/**
 * The object this file is attached to
 */

readonly attachable: AttachmentSubjectUnion;
/**
 * A caption for the attachment
 */

readonly caption: Note;
}

type AttachmentQuery = Query<Attachment, never>;

/**
  * Attachment Aha! model
  *
  * A file attachment
  *
  * Instance type: [[Attachment]]
  *
  * @category Aha! Model
  */
interface AttachmentConstructor extends ApplicationModelConstructor<
  Attachment,
  never
> {};

/**
  * Attachment Aha! model
  *
  * A file attachment
  *
  * Constructor: [[AttachmentConstructor]]
  *
  * @category Aha! Model Instance
  */
interface Attachment extends ApplicationModel, AttachmentAttributes {
  readonly typename: 'Attachment';

  readonly query: AttachmentQuery;

  attributes: AttachmentAttributes;

  
}

/**
  * Attributes for BookmarksIterationBurndown
  * @category Aha! Model Attributes
  */
interface BookmarksIterationBurndownAttributes {
  /**
 * Currently active filters on the board
 */

filters: any;
readonly id: string;
/**
 * The project or team id whose records appear on this board
 */

readonly projectId: string;
/**
 * The project or team whose records appear on this board
 */

readonly project: Project;
}

type BookmarksIterationBurndownQuery = Query<BookmarksIterationBurndown, never>;

/**
  * BookmarksIterationBurndown Aha! model
  *
  * 
  *
  * Instance type: [[BookmarksIterationBurndown]]
  *
  * @category Aha! Model
  */
interface BookmarksIterationBurndownConstructor extends ApplicationModelConstructor<
  BookmarksIterationBurndown,
  never
> {};

/**
  * BookmarksIterationBurndown Aha! model
  *
  * 
  *
  * Constructor: [[BookmarksIterationBurndownConstructor]]
  *
  * @category Aha! Model Instance
  */
interface BookmarksIterationBurndown extends ApplicationModel, BookmarksIterationBurndownAttributes {
  readonly typename: 'BookmarksIterationBurndown';

  readonly query: BookmarksIterationBurndownQuery;

  attributes: BookmarksIterationBurndownAttributes;

  
}

/**
  * Attributes for BookmarksRecordPosition
  * @category Aha! Model Attributes
  */
interface BookmarksRecordPositionAttributes {
  /**
 * The type of bookmark this position applies to. For example: 'Iteration', 'Bookmarks::WorkflowBoard'
 */

bookmarkType: string;
readonly id: string;
/**
 * The position of the record. Smaller / more negative is higher.
 */

readonly position: number;
recordId: string;
recordType: string;
}

type BookmarksRecordPositionQuery = Query<BookmarksRecordPosition, never>;

/**
  * BookmarksRecordPosition Aha! model
  *
  * The position of a record in a specific bookmark type. This is used to sort records in different ways when they belong to different views.
  *
  * Instance type: [[BookmarksRecordPosition]]
  *
  * @category Aha! Model
  */
interface BookmarksRecordPositionConstructor extends ApplicationModelConstructor<
  BookmarksRecordPosition,
  never
> {};

/**
  * BookmarksRecordPosition Aha! model
  *
  * The position of a record in a specific bookmark type. This is used to sort records in different ways when they belong to different views.
  *
  * Constructor: [[BookmarksRecordPositionConstructor]]
  *
  * @category Aha! Model Instance
  */
interface BookmarksRecordPosition extends ApplicationModel, BookmarksRecordPositionAttributes {
  readonly typename: 'BookmarksRecordPosition';

  readonly query: BookmarksRecordPositionQuery;

  attributes: BookmarksRecordPositionAttributes;

  
}

/**
  * Attributes for BookmarksTeamBacklog
  * @category Aha! Model Attributes
  */
interface BookmarksTeamBacklogAttributes {
  readonly id: string;
/**
 * The project / team this backlog applies to
 */

readonly projectId: string;
readonly records: Array<RecordUnion>;
}

type BookmarksTeamBacklogQuery = Query<BookmarksTeamBacklog, never>;

/**
  * BookmarksTeamBacklog Aha! model
  *
  * A reorderable backlog for a team
  *
  * Instance type: [[BookmarksTeamBacklog]]
  *
  * @category Aha! Model
  */
interface BookmarksTeamBacklogConstructor extends ApplicationModelConstructor<
  BookmarksTeamBacklog,
  never
> {};

/**
  * BookmarksTeamBacklog Aha! model
  *
  * A reorderable backlog for a team
  *
  * Constructor: [[BookmarksTeamBacklogConstructor]]
  *
  * @category Aha! Model Instance
  */
interface BookmarksTeamBacklog extends ApplicationModel, BookmarksTeamBacklogAttributes {
  readonly typename: 'BookmarksTeamBacklog';

  readonly query: BookmarksTeamBacklogQuery;

  attributes: BookmarksTeamBacklogAttributes;

  
}

/**
  * Attributes for BookmarksWorkflowBoard
  * @category Aha! Model Attributes
  */
interface BookmarksWorkflowBoardAttributes {
  /**
 * Currently active filters on the board
 */

filters: any;
/**
 * How to group the records
 */

group: string;
readonly id: string;
/**
 * The project or team id whose records appear on this board
 */

readonly projectId: string;
/**
 * How to view the board: 'my_work', 'team_work', or 'none'
 */

view: string;
/**
 * The ID of the workflow of the records on this board
 */

readonly workflowId: string;
/**
 * The iteration whose records appear on this board, if applicable
 */

readonly iteration: Iteration;
/**
 * The project or team whose records appear on this board
 */

readonly project: Project;
/**
 * The workflow of the records on this board
 */

readonly workflow: Workflow;
readonly records: Array<RecordUnion>;
}

type BookmarksWorkflowBoardQuery = Query<BookmarksWorkflowBoard, never>;

/**
  * BookmarksWorkflowBoard Aha! model
  *
  * A workflow board for a team or iteration
  *
  * Instance type: [[BookmarksWorkflowBoard]]
  *
  * @category Aha! Model
  */
interface BookmarksWorkflowBoardConstructor extends ApplicationModelConstructor<
  BookmarksWorkflowBoard,
  never
> {};

/**
  * BookmarksWorkflowBoard Aha! model
  *
  * A workflow board for a team or iteration
  *
  * Constructor: [[BookmarksWorkflowBoardConstructor]]
  *
  * @category Aha! Model Instance
  */
interface BookmarksWorkflowBoard extends ApplicationModel, BookmarksWorkflowBoardAttributes {
  readonly typename: 'BookmarksWorkflowBoard';

  readonly query: BookmarksWorkflowBoardQuery;

  attributes: BookmarksWorkflowBoardAttributes;

  
}

/**
  * Attributes for Comment
  * @category Aha! Model Attributes
  */
interface CommentAttributes {
  /**
 * Long-form body in HTML
 */

readonly body: string;
readonly createdAt: string;
readonly id: string;
readonly updatedAt: string;
/**
 * The record that is being commented on
 */

readonly commentable: CommentableSubjectUnion;
/**
 * The user who made the comment
 */

readonly user: User;
}

type CommentQuery = Query<Comment, never>;

/**
  * Comment Aha! model
  *
  * A comment on a record
  *
  * Instance type: [[Comment]]
  *
  * @category Aha! Model
  */
interface CommentConstructor extends ApplicationModelConstructor<
  Comment,
  never
> {};

/**
  * Comment Aha! model
  *
  * A comment on a record
  *
  * Constructor: [[CommentConstructor]]
  *
  * @category Aha! Model Instance
  */
interface Comment extends ApplicationModel, CommentAttributes {
  readonly typename: 'Comment';

  readonly query: CommentQuery;

  attributes: CommentAttributes;

  
}

/**
  * Attributes for CustomFieldValue
  * @category Aha! Model Attributes
  */
interface CustomFieldValueAttributes {
  readonly createdAt: string;
/**
 * The ID for the custom field value
 */

readonly id: string;
/**
 * The API key for the custom field
 */

readonly key: string;
/**
 * The position of the selected option (only for single-choice fields)
 */

readonly position: number;
readonly updatedAt: string;
/**
 * The value for the custom field
 */

readonly value: any;
/**
 * The record the custom field value belongs to
 */

readonly record: CustomFieldValueRecordSubjectUnion;
}

type CustomFieldValueQuery = Query<CustomFieldValue, never>;

/**
  * CustomFieldValue Aha! model
  *
  * A custom field value on a record
  *
  * Instance type: [[CustomFieldValue]]
  *
  * @category Aha! Model
  */
interface CustomFieldValueConstructor extends ApplicationModelConstructor<
  CustomFieldValue,
  never
> {};

/**
  * CustomFieldValue Aha! model
  *
  * A custom field value on a record
  *
  * Constructor: [[CustomFieldValueConstructor]]
  *
  * @category Aha! Model Instance
  */
interface CustomFieldValue extends ApplicationModel, CustomFieldValueAttributes {
  readonly typename: 'CustomFieldValue';

  readonly query: CustomFieldValueQuery;

  attributes: CustomFieldValueAttributes;

  
}

/**
  * Attributes for Epic
  * @category Aha! Model Attributes
  */
interface EpicAttributes {
  readonly commentsCount: number;
readonly createdAt: string;
readonly dueDate: string;
readonly id: string;
name: string;
/**
 * Path to the details page
 */

readonly path: string;
/**
 * Position of the epic when a record_position does not apply
 */

position: number;
/**
 * Reference number of the record. Example: DEV-123
 */

readonly referenceNum: string;
readonly score: number;
readonly startDate: string;
readonly updatedAt: string;
assignedToUser: User;
/**
 * Description note
 */

description: Note;
iteration: Iteration;
/**
 * Originally estimated amount of work
 */

readonly originalEstimate: Estimate;
readonly project: Project;
release: Release;
/**
 * Current estimate of work left to do
 */

readonly remainingEstimate: Estimate;
/**
 * Team this epic belongs to
 */

team: Project;
/**
 * Current team workflow status
 */

teamWorkflowStatus: WorkflowStatus;
/**
 * Amount of work done so far
 */

readonly workDone: Estimate;
/**
 * The epic type
 */

readonly workflowKind: WorkflowKind;
/**
 * Current overall workflow status
 */

workflowStatus: WorkflowStatus;
/**
 * The position of a record when it is listed in a specific bookmark type
 */

readonly bookmarksRecordPositions: Array<BookmarksRecordPosition>;
/**
 * Custom field values
 */

readonly customFieldValues: Array<CustomFieldValue>;
/**
 * Additional data stored by extensions
 */

readonly extensionFields: Array<ExtensionField>;
readonly features: Array<Feature>;
readonly tags: Array<Tag>;
readonly tasks: Array<Task>;
}

type EpicQuery = Query<Epic, EpicFilters>;

/**
  * Epic Aha! model
  *
  * A high-level record that can contain multiple related features
  *
  * Instance type: [[Epic]]
  *
  * @category Aha! Model
  */
interface EpicConstructor extends ApplicationModelConstructor<
  Epic,
  EpicFilters
> {};

/**
  * Epic Aha! model
  *
  * A high-level record that can contain multiple related features
  *
  * Constructor: [[EpicConstructor]]
  *
  * @category Aha! Model Instance
  */
interface Epic extends ApplicationModel, EpicAttributes, HasExtensionFields {
  readonly typename: 'Epic';

  readonly query: EpicQuery;

  attributes: EpicAttributes;

  
  order: EpicOrder['values'];
  
}

/**
  * Attributes for Estimate
  * @category Aha! Model Attributes
  */
interface EstimateAttributes {
  /**
 * A string representation of the estimate. Example: 14p for 14 points
 */

readonly text: string;
readonly units: WorkUnitEnum['values'];
readonly value: number;
}

type EstimateQuery = Query<Estimate, never>;

/**
  * Estimate Aha! model
  *
  * An estimate of work done or work remaining for a record
  *
  * Instance type: [[Estimate]]
  *
  * @category Aha! Model
  */
interface EstimateConstructor extends ApplicationModelConstructor<
  Estimate,
  never
> {};

/**
  * Estimate Aha! model
  *
  * An estimate of work done or work remaining for a record
  *
  * Constructor: [[EstimateConstructor]]
  *
  * @category Aha! Model Instance
  */
interface Estimate extends ApplicationModel, EstimateAttributes {
  readonly typename: 'Estimate';

  readonly query: EstimateQuery;

  attributes: EstimateAttributes;

  
}

/**
  * Attributes for Extension
  * @category Aha! Model Attributes
  */
interface ExtensionAttributes {
  readonly createdAt: string;
readonly enabled: boolean;
readonly id: string;
readonly identifier: string;
readonly name: string;
readonly updatedAt: string;
readonly extensionLogs: Array<ExtensionLog>;
}

type ExtensionQuery = Query<Extension, never>;

/**
  * Extension Aha! model
  *
  * 
  *
  * Instance type: [[Extension]]
  *
  * @category Aha! Model
  */
interface ExtensionConstructor extends ApplicationModelConstructor<
  Extension,
  never
> {};

/**
  * Extension Aha! model
  *
  * 
  *
  * Constructor: [[ExtensionConstructor]]
  *
  * @category Aha! Model Instance
  */
interface Extension extends ApplicationModel, ExtensionAttributes {
  readonly typename: 'Extension';

  readonly query: ExtensionQuery;

  attributes: ExtensionAttributes;

  
}

/**
  * Attributes for ExtensionContribution
  * @category Aha! Model Attributes
  */
interface ExtensionContributionAttributes {
  readonly createdAt: string;
readonly id: string;
/**
 * The identifier of the extensin contribution. Example: 'aha-develop.github-import.issues'
 */

readonly identifier: string;
readonly name: string;
readonly updatedAt: string;
/**
 * The extension providing this contribution
 */

readonly extension: Extension;
}

type ExtensionContributionQuery = Query<ExtensionContribution, ExtensionContributionFilters>;

/**
  * ExtensionContribution Aha! model
  *
  * A contribution provided by an extension
  *
  * Instance type: [[ExtensionContribution]]
  *
  * @category Aha! Model
  */
interface ExtensionContributionConstructor extends ApplicationModelConstructor<
  ExtensionContribution,
  ExtensionContributionFilters
> {};

/**
  * ExtensionContribution Aha! model
  *
  * A contribution provided by an extension
  *
  * Constructor: [[ExtensionContributionConstructor]]
  *
  * @category Aha! Model Instance
  */
interface ExtensionContribution extends ApplicationModel, ExtensionContributionAttributes {
  readonly typename: 'ExtensionContribution';

  readonly query: ExtensionContributionQuery;

  attributes: ExtensionContributionAttributes;

  
}

/**
  * Attributes for ExtensionField
  * @category Aha! Model Attributes
  */
interface ExtensionFieldAttributes {
  readonly createdAt: string;
/**
 * The ID of the object the field is attached to
 */

extensionFieldableId: string;
/**
 * The type of object the field is attached to
 */

extensionFieldableType: string;
readonly id: string;
name: string;
readonly updatedAt: string;
value: any;
/**
 * The extension responsible for this field
 */

extension: Extension;
readonly extensionFieldable: ExtensionFieldableSubjectUnion;
}

type ExtensionFieldQuery = Query<ExtensionField, ExtensionFieldsFilters>;

/**
  * ExtensionField Aha! model
  *
  * Holds data related to an extension
  *
  * Instance type: [[ExtensionField]]
  *
  * @category Aha! Model
  */
interface ExtensionFieldConstructor extends ApplicationModelConstructor<
  ExtensionField,
  ExtensionFieldsFilters
> {};

/**
  * ExtensionField Aha! model
  *
  * Holds data related to an extension
  *
  * Constructor: [[ExtensionFieldConstructor]]
  *
  * @category Aha! Model Instance
  */
interface ExtensionField extends ApplicationModel, ExtensionFieldAttributes {
  readonly typename: 'ExtensionField';

  readonly query: ExtensionFieldQuery;

  attributes: ExtensionFieldAttributes;

  
}

/**
  * Attributes for ExtensionInvocation
  * @category Aha! Model Attributes
  */
interface ExtensionInvocationAttributes {
  readonly createdAt: string;
readonly id: string;
readonly updatedAt: string;
/**
 * The contribution that was invoked
 */

readonly extensionContribution: ExtensionContribution;
/**
 * Log messages written during this invocation
 */

readonly extensionLogs: ExtensionLog;
}

type ExtensionInvocationQuery = Query<ExtensionInvocation, never>;

/**
  * ExtensionInvocation Aha! model
  *
  * A single invocation of an extension contribution
  *
  * Instance type: [[ExtensionInvocation]]
  *
  * @category Aha! Model
  */
interface ExtensionInvocationConstructor extends ApplicationModelConstructor<
  ExtensionInvocation,
  never
> {};

/**
  * ExtensionInvocation Aha! model
  *
  * A single invocation of an extension contribution
  *
  * Constructor: [[ExtensionInvocationConstructor]]
  *
  * @category Aha! Model Instance
  */
interface ExtensionInvocation extends ApplicationModel, ExtensionInvocationAttributes {
  readonly typename: 'ExtensionInvocation';

  readonly query: ExtensionInvocationQuery;

  attributes: ExtensionInvocationAttributes;

  
}

/**
  * Attributes for ExtensionLog
  * @category Aha! Model Attributes
  */
interface ExtensionLogAttributes {
  /**
 * Structured log messages
 */

readonly content: any;
readonly createdAt: string;
readonly id: string;
readonly updatedAt: string;
/**
 * The contribution that was invoked
 */

readonly extensionContribution: ExtensionContribution;
/**
 * The invocation writing these log messages
 */

readonly extensionInvocation: ExtensionInvocation;
}

type ExtensionLogQuery = Query<ExtensionLog, ExtensionLogFilters>;

/**
  * ExtensionLog Aha! model
  *
  * Log messages for a single invocation of an extension contribution
  *
  * Instance type: [[ExtensionLog]]
  *
  * @category Aha! Model
  */
interface ExtensionLogConstructor extends ApplicationModelConstructor<
  ExtensionLog,
  ExtensionLogFilters
> {};

/**
  * ExtensionLog Aha! model
  *
  * Log messages for a single invocation of an extension contribution
  *
  * Constructor: [[ExtensionLogConstructor]]
  *
  * @category Aha! Model Instance
  */
interface ExtensionLog extends ApplicationModel, ExtensionLogAttributes {
  readonly typename: 'ExtensionLog';

  readonly query: ExtensionLogQuery;

  attributes: ExtensionLogAttributes;

  
}

/**
  * Attributes for Feature
  * @category Aha! Model Attributes
  */
interface FeatureAttributes {
  readonly commentsCount: number;
readonly createdAt: string;
readonly dueDate: string;
readonly id: string;
name: string;
/**
 * Path to the details page
 */

readonly path: string;
/**
 * Position of the feature when a record_position does not apply
 */

position: number;
/**
 * Reference number of the record. Example: DEV-123
 */

readonly referenceNum: string;
readonly score: number;
readonly startDate: string;
/**
 * Comma-separated list of tag names
 */

tagList: string;
readonly updatedAt: string;
assignedToUser: User;
/**
 * Description note
 */

description: Note;
/**
 * Epic this feature belongs to, if present
 */

epic: Epic;
iteration: Iteration;
/**
 * Originally estimated amount of work
 */

readonly originalEstimate: Estimate;
readonly project: Project;
release: Release;
/**
 * Current estimate of work left to do
 */

readonly remainingEstimate: Estimate;
/**
 * Team this feature belongs to
 */

team: Project;
/**
 * Current team workflow status
 */

teamWorkflowStatus: WorkflowStatus;
/**
 * Amount of work done so far
 */

readonly workDone: Estimate;
/**
 * The feature type
 */

readonly workflowKind: WorkflowKind;
/**
 * Current overall workflow status
 */

workflowStatus: WorkflowStatus;
/**
 * Position when this feature is listed in a specific bookmark type
 */

readonly bookmarksRecordPositions: Array<BookmarksRecordPosition>;
/**
 * Custom field values
 */

readonly customFieldValues: Array<CustomFieldValue>;
/**
 * Additional data stored by extensions
 */

readonly extensionFields: Array<ExtensionField>;
readonly requirements: Array<Requirement>;
readonly tags: Array<Tag>;
readonly tasks: Array<Task>;
}

type FeatureQuery = Query<Feature, FeatureFilters>;

/**
  * Feature Aha! model
  *
  * A basic record representing work to be done
  *
  * Instance type: [[Feature]]
  *
  * @category Aha! Model
  */
interface FeatureConstructor extends ApplicationModelConstructor<
  Feature,
  FeatureFilters
> {};

/**
  * Feature Aha! model
  *
  * A basic record representing work to be done
  *
  * Constructor: [[FeatureConstructor]]
  *
  * @category Aha! Model Instance
  */
interface Feature extends ApplicationModel, FeatureAttributes, HasExtensionFields {
  readonly typename: 'Feature';

  readonly query: FeatureQuery;

  attributes: FeatureAttributes;

  
  order: FeatureOrder['values'];
  
}

/**
  * Attributes for Iteration
  * @category Aha! Model Attributes
  */
interface IterationAttributes {
  readonly createdAt: string;
/**
 * Duration of the iteration, in days
 */

duration: number;
readonly id: string;
name: string;
startDate: string;
/**
 * The iteration status. PLANNING: 10, ACTIVE: 20, COMPLETE: 30
 */

status: number;
readonly updatedAt: string;
/**
 * Capacity of the iteration
 */

capacity: Estimate;
/**
 * Description note
 */

description: Note;
/**
 * Total amount of work planned when the iteration started
 */

readonly originalEstimate: Estimate;
project: Project;
/**
 * Records scheduled in this iteration
 */

readonly records: Array<RecordUnion>;
readonly tasks: Array<Task>;
}

type IterationQuery = Query<Iteration, IterationFilters>;

/**
  * Iteration Aha! model
  *
  * A group of records scheduled during a particular time period
  *
  * Instance type: [[Iteration]]
  *
  * @category Aha! Model
  */
interface IterationConstructor extends ApplicationModelConstructor<
  Iteration,
  IterationFilters
> {};

/**
  * Iteration Aha! model
  *
  * A group of records scheduled during a particular time period
  *
  * Constructor: [[IterationConstructor]]
  *
  * @category Aha! Model Instance
  */
interface Iteration extends ApplicationModel, IterationAttributes {
  readonly typename: 'Iteration';

  readonly query: IterationQuery;

  attributes: IterationAttributes;

  
  order: IterationOrder['values'];
  
}

/**
  * Attributes for Note
  * @category Aha! Model Attributes
  */
interface NoteAttributes {
  readonly htmlBody: string;
readonly id: string;
readonly record: NoteRecordSubjectUnion;
readonly attachments: Array<Attachment>;
readonly authors: Array<User>;
}

type NoteQuery = Query<Note, never>;

/**
  * Note Aha! model
  *
  * 
  *
  * Instance type: [[Note]]
  *
  * @category Aha! Model
  */
interface NoteConstructor extends ApplicationModelConstructor<
  Note,
  never
> {};

/**
  * Note Aha! model
  *
  * 
  *
  * Constructor: [[NoteConstructor]]
  *
  * @category Aha! Model Instance
  */
interface Note extends ApplicationModel, NoteAttributes {
  readonly typename: 'Note';

  readonly query: NoteQuery;

  attributes: NoteAttributes;

  
}

/**
  * Attributes for Notification
  * @category Aha! Model Attributes
  */
interface NotificationAttributes {
  readonly createdAt: string;
readonly id: string;
/**
 * Notification is marked as read
 */

readonly read: boolean;
/**
 * Notification scope is participating or watching
 */

readonly scope: NotificationScopeEnum['values'];
/**
 * Notification is starred
 */

readonly starred: boolean;
readonly updatedAt: string;
/**
 * The record that is subject to the notification
 */

readonly notifiable: NotifiableSubjectUnion;
readonly project: Project;
}

type NotificationQuery = Query<Notification, NotificationFilters>;

/**
  * Notification Aha! model
  *
  * A notification of changes
  *
  * Instance type: [[Notification]]
  *
  * @category Aha! Model
  */
interface NotificationConstructor extends ApplicationModelConstructor<
  Notification,
  NotificationFilters
> {};

/**
  * Notification Aha! model
  *
  * A notification of changes
  *
  * Constructor: [[NotificationConstructor]]
  *
  * @category Aha! Model Instance
  */
interface Notification extends ApplicationModel, NotificationAttributes {
  readonly typename: 'Notification';

  readonly query: NotificationQuery;

  attributes: NotificationAttributes;

  
  order: NotificationOrder['values'];
  
}

/**
  * Attributes for Project
  * @category Aha! Model Attributes
  */
interface ProjectAttributes {
  /**
 * ID of the BookmarksBacklogBoard corresponding to this team
 */

readonly backlogBookmarkId: string;
readonly createdAt: string;
readonly id: string;
/**
 * True if the project is a team, false if it is a workspace
 */

readonly isTeam: boolean;
readonly name: string;
/**
 * The reference prefix for the project or team
 */

readonly referencePrefix: string;
readonly updatedAt: string;
/**
 * Release new records are created in, by default
 */

readonly defaultRelease: Release;
/**
 * User assigned to records if none is specified
 */

readonly defaultUser: User;
readonly epicWorkflow: Workflow;
readonly featureWorkflow: Workflow;
readonly requirementWorkflow: Workflow;
/**
 * The BookmarksWorkflowBoard corresponding to this team for the current user
 */

readonly workflowBoardBookmark: BookmarksWorkflowBoard;
/**
 * Custom field values
 */

readonly customFieldValues: Array<CustomFieldValue>;
/**
 * Additional data stored by extensions
 */

readonly extensionFields: Array<ExtensionField>;
readonly releases: Array<Release>;
/**
 * Users belonging to the project or team
 */

readonly users: Array<User>;
}

type ProjectQuery = Query<Project, ProjectFilters>;

/**
  * Project Aha! model
  *
  * An Aha! workspace or team
  *
  * Instance type: [[Project]]
  *
  * @category Aha! Model
  */
interface ProjectConstructor extends ApplicationModelConstructor<
  Project,
  ProjectFilters
> {};

/**
  * Project Aha! model
  *
  * An Aha! workspace or team
  *
  * Constructor: [[ProjectConstructor]]
  *
  * @category Aha! Model Instance
  */
interface Project extends ApplicationModel, ProjectAttributes, HasExtensionFields {
  readonly typename: 'Project';

  readonly query: ProjectQuery;

  attributes: ProjectAttributes;

  
}

/**
  * Attributes for RecordEventRaw
  * @category Aha! Model Attributes
  */
interface RecordEventRawAttributes {
  readonly createdAt: string;
readonly eventType: RecordEventTypeEnum['values'];
readonly id: string;
readonly originalEstimate: number;
readonly remainingEstimate: number;
readonly units: WorkUnitEnum['values'];
readonly updatedAt: string;
readonly assignedToUser: User;
readonly epic: Epic;
readonly eventSubject: RecordEventSubjectUnion;
readonly feature: Feature;
readonly iteration: Iteration;
readonly release: Release;
readonly requirement: Requirement;
readonly team: Project;
readonly teamWorkflowStatus: WorkflowStatus;
readonly user: User;
}

type RecordEventRawQuery = Query<RecordEventRaw, never>;

/**
  * RecordEventRaw Aha! model
  *
  * 
  *
  * Instance type: [[RecordEventRaw]]
  *
  * @category Aha! Model
  */
interface RecordEventRawConstructor extends ApplicationModelConstructor<
  RecordEventRaw,
  never
> {};

/**
  * RecordEventRaw Aha! model
  *
  * 
  *
  * Constructor: [[RecordEventRawConstructor]]
  *
  * @category Aha! Model Instance
  */
interface RecordEventRaw extends ApplicationModel, RecordEventRawAttributes {
  readonly typename: 'RecordEventRaw';

  readonly query: RecordEventRawQuery;

  attributes: RecordEventRawAttributes;

  
}

/**
  * Attributes for Release
  * @category Aha! Model Attributes
  */
interface ReleaseAttributes {
  readonly createdAt: string;
readonly id: string;
readonly name: string;
/**
 * True if the release appears in the parking lot, false if it is a scheduled release
 */

readonly parkingLot: boolean;
/**
 * Path to the details page
 */

readonly path: string;
readonly position: number;
/**
 * Reference number of the record. Example: DEV-123
 */

readonly referenceNum: string;
readonly releaseDate: string;
readonly updatedAt: string;
readonly project: Project;
readonly theme: Note;
/**
 * Custom field values
 */

readonly customFieldValues: Array<CustomFieldValue>;
readonly tasks: Array<Task>;
}

type ReleaseQuery = Query<Release, ReleaseFilters>;

/**
  * Release Aha! model
  *
  * A group of records with a release date or theme
  *
  * Instance type: [[Release]]
  *
  * @category Aha! Model
  */
interface ReleaseConstructor extends ApplicationModelConstructor<
  Release,
  ReleaseFilters
> {};

/**
  * Release Aha! model
  *
  * A group of records with a release date or theme
  *
  * Constructor: [[ReleaseConstructor]]
  *
  * @category Aha! Model Instance
  */
interface Release extends ApplicationModel, ReleaseAttributes {
  readonly typename: 'Release';

  readonly query: ReleaseQuery;

  attributes: ReleaseAttributes;

  
  order: ReleaseOrder['values'];
  
}

/**
  * Attributes for Requirement
  * @category Aha! Model Attributes
  */
interface RequirementAttributes {
  readonly commentsCount: number;
readonly createdAt: string;
readonly id: string;
name: string;
/**
 * Path to the details page
 */

readonly path: string;
/**
 * Position of the requirement when a record_position does not apply
 */

position: number;
/**
 * Reference number of the record. Example: DEV-123
 */

readonly referenceNum: string;
readonly updatedAt: string;
assignedToUser: User;
/**
 * Description note
 */

description: Note;
/**
 * Epic this requirement belongs to, if present
 */

readonly epic: Epic;
/**
 * Feature this requirement belongs to, if present
 */

feature: Feature;
iteration: Iteration;
/**
 * Originally estimated amount of work
 */

readonly originalEstimate: Estimate;
readonly project: Project;
readonly release: Release;
/**
 * Current estimate of work left to do
 */

readonly remainingEstimate: Estimate;
/**
 * Team this requirement belongs to
 */

team: Project;
/**
 * Current team workflow status
 */

teamWorkflowStatus: WorkflowStatus;
/**
 * Amount of work done so far
 */

readonly workDone: Estimate;
/**
 * Current overall workflow status
 */

workflowStatus: WorkflowStatus;
/**
 * Position when this record is listed in a specific bookmark type
 */

readonly bookmarksRecordPositions: Array<BookmarksRecordPosition>;
/**
 * Custom field values
 */

readonly customFieldValues: Array<CustomFieldValue>;
/**
 * Additional data stored by extensions
 */

readonly extensionFields: Array<ExtensionField>;
readonly tasks: Array<Task>;
}

type RequirementQuery = Query<Requirement, RequirementFilters>;

/**
  * Requirement Aha! model
  *
  * A record representing one part of a larger feature
  *
  * Instance type: [[Requirement]]
  *
  * @category Aha! Model
  */
interface RequirementConstructor extends ApplicationModelConstructor<
  Requirement,
  RequirementFilters
> {};

/**
  * Requirement Aha! model
  *
  * A record representing one part of a larger feature
  *
  * Constructor: [[RequirementConstructor]]
  *
  * @category Aha! Model Instance
  */
interface Requirement extends ApplicationModel, RequirementAttributes, HasExtensionFields {
  readonly typename: 'Requirement';

  readonly query: RequirementQuery;

  attributes: RequirementAttributes;

  
  order: RequirementOrder['values'];
  
}

/**
  * Attributes for Tag
  * @category Aha! Model Attributes
  */
interface TagAttributes {
  /**
 * Hex color converted to decimal
 */

readonly color: number;
readonly id: string;
readonly name: string;
}

type TagQuery = Query<Tag, TagFilters>;

/**
  * Tag Aha! model
  *
  * A tag on a record
  *
  * Instance type: [[Tag]]
  *
  * @category Aha! Model
  */
interface TagConstructor extends ApplicationModelConstructor<
  Tag,
  TagFilters
> {};

/**
  * Tag Aha! model
  *
  * A tag on a record
  *
  * Constructor: [[TagConstructor]]
  *
  * @category Aha! Model Instance
  */
interface Tag extends ApplicationModel, TagAttributes {
  readonly typename: 'Tag';

  readonly query: TagQuery;

  attributes: TagAttributes;

  
}

/**
  * Attributes for Task
  * @category Aha! Model Attributes
  */
interface TaskAttributes {
  body: string;
readonly createdAt: string;
dueDate: string;
readonly id: string;
name: string;
/**
 * Path to the details page
 */

readonly path: string;
position: number;
status: TaskStatusEnum['values'];
readonly updatedAt: string;
record: TaskableSubjectUnion;
readonly taskUsers: Array<TaskUser>;
readonly users: Array<User>;
}

type TaskQuery = Query<Task, never>;

/**
  * Task Aha! model
  *
  * 
  *
  * Instance type: [[Task]]
  *
  * @category Aha! Model
  */
interface TaskConstructor extends ApplicationModelConstructor<
  Task,
  never
> {};

/**
  * Task Aha! model
  *
  * 
  *
  * Constructor: [[TaskConstructor]]
  *
  * @category Aha! Model Instance
  */
interface Task extends ApplicationModel, TaskAttributes {
  readonly typename: 'Task';

  readonly query: TaskQuery;

  attributes: TaskAttributes;

  
}

/**
  * Attributes for TaskUser
  * @category Aha! Model Attributes
  */
interface TaskUserAttributes {
  readonly completedDate: string;
readonly createdAt: string;
readonly id: string;
readonly status: TaskStatusEnum['values'];
readonly updatedAt: string;
readonly task: Task;
readonly user: User;
}

type TaskUserQuery = Query<TaskUser, never>;

/**
  * TaskUser Aha! model
  *
  * 
  *
  * Instance type: [[TaskUser]]
  *
  * @category Aha! Model
  */
interface TaskUserConstructor extends ApplicationModelConstructor<
  TaskUser,
  never
> {};

/**
  * TaskUser Aha! model
  *
  * 
  *
  * Constructor: [[TaskUserConstructor]]
  *
  * @category Aha! Model Instance
  */
interface TaskUser extends ApplicationModel, TaskUserAttributes {
  readonly typename: 'TaskUser';

  readonly query: TaskUserQuery;

  attributes: TaskUserAttributes;

  
}

/**
  * Attributes for Unimplemented
  * @category Aha! Model Attributes
  */
interface UnimplementedAttributes {
  readonly id: string;
readonly name: string;
}

type UnimplementedQuery = Query<Unimplemented, never>;

/**
  * Unimplemented Aha! model
  *
  * 
  *
  * Instance type: [[Unimplemented]]
  *
  * @category Aha! Model
  */
interface UnimplementedConstructor extends ApplicationModelConstructor<
  Unimplemented,
  never
> {};

/**
  * Unimplemented Aha! model
  *
  * 
  *
  * Constructor: [[UnimplementedConstructor]]
  *
  * @category Aha! Model Instance
  */
interface Unimplemented extends ApplicationModel, UnimplementedAttributes {
  readonly typename: 'Unimplemented';

  readonly query: UnimplementedQuery;

  attributes: UnimplementedAttributes;

  
}

/**
  * Attributes for User
  * @category Aha! Model Attributes
  */
interface UserAttributes {
  /**
 * URL to the user's avatar. Defaults to 32px
 */

readonly avatarUrl: string;
readonly createdAt: string;
readonly id: string;
readonly name: string;
/**
 * User's selected time zone as IANA time zone database name
 */

readonly timezone: string;
readonly updatedAt: string;
/**
 * Additional data stored by extensions
 */

readonly extensionFields: Array<ExtensionField>;
/**
 * Projects this user belongs to
 */

readonly projects: Array<Project>;
readonly taskUsers: Array<TaskUser>;
}

type UserQuery = Query<User, UserFilters>;

/**
  * User Aha! model
  *
  * 
  *
  * Instance type: [[User]]
  *
  * @category Aha! Model
  */
interface UserConstructor extends ApplicationModelConstructor<
  User,
  UserFilters
> {};

/**
  * User Aha! model
  *
  * 
  *
  * Constructor: [[UserConstructor]]
  *
  * @category Aha! Model Instance
  */
interface User extends ApplicationModel, UserAttributes, HasExtensionFields {
  readonly typename: 'User';

  readonly query: UserQuery;

  attributes: UserAttributes;

  
}

/**
  * Attributes for Workflow
  * @category Aha! Model Attributes
  */
interface WorkflowAttributes {
  /**
 * If true, this is a global status that cannot be edited
 */

readonly builtIn: boolean;
readonly createdAt: string;
readonly id: string;
readonly name: string;
readonly updatedAt: string;
readonly workflowStatuses: Array<WorkflowStatus>;
}

type WorkflowQuery = Query<Workflow, never>;

/**
  * Workflow Aha! model
  *
  * A record workflow
  *
  * Instance type: [[Workflow]]
  *
  * @category Aha! Model
  */
interface WorkflowConstructor extends ApplicationModelConstructor<
  Workflow,
  never
> {};

/**
  * Workflow Aha! model
  *
  * A record workflow
  *
  * Constructor: [[WorkflowConstructor]]
  *
  * @category Aha! Model Instance
  */
interface Workflow extends ApplicationModel, WorkflowAttributes {
  readonly typename: 'Workflow';

  readonly query: WorkflowQuery;

  attributes: WorkflowAttributes;

  
}

/**
  * Attributes for WorkflowKind
  * @category Aha! Model Attributes
  */
interface WorkflowKindAttributes {
  readonly createdAt: string;
readonly id: string;
readonly name: string;
readonly position: number;
readonly updatedAt: string;
/**
 * Workflow containing this kind
 */

readonly workflow: Workflow;
}

type WorkflowKindQuery = Query<WorkflowKind, never>;

/**
  * WorkflowKind Aha! model
  *
  * A type of a record
  *
  * Instance type: [[WorkflowKind]]
  *
  * @category Aha! Model
  */
interface WorkflowKindConstructor extends ApplicationModelConstructor<
  WorkflowKind,
  never
> {};

/**
  * WorkflowKind Aha! model
  *
  * A type of a record
  *
  * Constructor: [[WorkflowKindConstructor]]
  *
  * @category Aha! Model Instance
  */
interface WorkflowKind extends ApplicationModel, WorkflowKindAttributes {
  readonly typename: 'WorkflowKind';

  readonly query: WorkflowKindQuery;

  attributes: WorkflowKindAttributes;

  
}

/**
  * Attributes for WorkflowStatus
  * @category Aha! Model Attributes
  */
interface WorkflowStatusAttributes {
  /**
 * If true, this is a global status that cannot be edited
 */

readonly builtIn: boolean;
/**
 * Hex color converted to decimal
 */

color: number;
readonly createdAt: string;
readonly id: string;
readonly internalMeaning: InternalMeaning['values'];
name: string;
position: number;
readonly updatedAt: string;
/**
 * Workflow containing this status
 */

workflow: Workflow;
}

type WorkflowStatusQuery = Query<WorkflowStatus, never>;

/**
  * WorkflowStatus Aha! model
  *
  * A single status within a workflow
  *
  * Instance type: [[WorkflowStatus]]
  *
  * @category Aha! Model
  */
interface WorkflowStatusConstructor extends ApplicationModelConstructor<
  WorkflowStatus,
  never
> {};

/**
  * WorkflowStatus Aha! model
  *
  * A single status within a workflow
  *
  * Constructor: [[WorkflowStatusConstructor]]
  *
  * @category Aha! Model Instance
  */
interface WorkflowStatus extends ApplicationModel, WorkflowStatusAttributes {
  readonly typename: 'WorkflowStatus';

  readonly query: WorkflowStatusQuery;

  attributes: WorkflowStatusAttributes;

  
}

type EpicPage = Aha.Page<Epic>;
type ExtensionContributionPage = Aha.Page<ExtensionContribution>;
type ExtensionFieldPage = Aha.Page<ExtensionField>;
type ExtensionLogPage = Aha.Page<ExtensionLog>;
type FeaturePage = Aha.Page<Feature>;
type IterationPage = Aha.Page<Iteration>;
type NotificationPage = Aha.Page<Notification>;
type ProjectPage = Aha.Page<Project>;
type RecordEvent = {
/**
 * Group events by a selected attribute
 */
grouped: Array<RecordEventGroup>;
/**
 * List of raw events
 */
raw: Array<RecordEventRaw>;
/**
 * Group events by a time series group
 */
timeSeries: Array<RecordEventTimeSeries>;
};
type ReleasePage = Aha.Page<Release>;
type RequirementPage = Aha.Page<Requirement>;
type TagPage = Aha.Page<Tag>;
type UserPage = Aha.Page<User>;
type EpicFilters = {
/**
 * Only show epics in active releases
 */
active: boolean;
id: Array<string>;
projectId: string;
releaseId: string;
teamId: string;
iterationId: string;
};
type ExtensionContributionFilters = {
id: Array<string>;
/**
 * Filters contributions by identifier. Example: 'aha-develop.github-import.issues'
 */
identifier: string;
/**
 * Filters contributions by contribution type: 'commands', 'endpoints', 'events', 'importers', 'settings', or 'views'
 */
contributes: string;
};
type ExtensionFieldsFilters = {
name: string;
names: Array<string>;
/**
 * The record type that the extension field belongs to.
 */
extensionFieldableType: ExtensionFieldableTypeEnum['values'];
/**
 * Finds fields for the extension with the specified ID
 */
extensionId: string;
/**
 * Finds fields for the extension with the specified identifier. Example: 'aha-develop.github-import'
 */
extensionIdentifier: string;
};
type ExtensionLogFilters = {
/**
 * Return only log lines after the specified date (in ISO8601 format)
 */
createdSince: string;
extensionId: string;
extensionContributionId: string;
extensionInvocationId: string;
};
type FeatureFilters = {
/**
 * Only show features in active releases
 */
active: boolean;
iterationId: string;
id: Array<string>;
projectId: string;
teamId: string;
releaseId: string;
assignedToUserId: string;
};
type IterationFilters = {
projectId: string;
/**
 * Limit to iterations in the specified statuses. PLANNING: 10, ACTIVE: 20, COMPLETE: 30
 */
status: Array<number>;
};
type NotificationFilters = {
read: NotificationReadEnum['values'];
starred: NotificationStarredEnum['values'];
projectId: string;
type: Array<NotificationTypeEnum['values']>;
};
type ProjectFilters = {
/**
 * Only show teams (true) or non-teams (false)
 */
teams: boolean;
};
type ReleaseFilters = {
id: Array<string>;
projectId: string;
/**
 * Only return active releases
 */
active: boolean;
};
type RequirementFilters = {
/**
 * Only show requirements in active releases
 */
active: boolean;
id: Array<string>;
releaseId: string;
projectId: string;
teamId: string;
iterationId: string;
assignedToUserId: string;
};
type TagFilters = {
id: Array<string>;
};
type UserFilters = {
projectId: string;
id: Array<string>;
};
type RecordEventGroup = {
count: number;
eventType: RecordEventTypeEnum['values'];
groupByValue: string;
originalEstimate: number;
remainingEstimate: number;
units: WorkUnitEnum['values'];
};
type RecordEventTimeSeries = {
eventTimeIndex: number;
eventType: RecordEventTypeEnum['values'];
originalEstimate: number;
remainingEstimate: number;
seriesRange: DateTimeRange;
units: WorkUnitEnum['values'];
};
type DateTimeRange = {
/**
 * Start of the range
 */
from: string;
/**
 * End of the range
 */
to: string;
};
  interface Models {
  Account: AccountConstructor;
  Attachment: AttachmentConstructor;
  BookmarksIterationBurndown: BookmarksIterationBurndownConstructor;
  BookmarksRecordPosition: BookmarksRecordPositionConstructor;
  BookmarksTeamBacklog: BookmarksTeamBacklogConstructor;
  BookmarksWorkflowBoard: BookmarksWorkflowBoardConstructor;
  Comment: CommentConstructor;
  CustomFieldValue: CustomFieldValueConstructor;
  Epic: EpicConstructor;
  Estimate: EstimateConstructor;
  Extension: ExtensionConstructor;
  ExtensionContribution: ExtensionContributionConstructor;
  ExtensionField: ExtensionFieldConstructor;
  ExtensionInvocation: ExtensionInvocationConstructor;
  ExtensionLog: ExtensionLogConstructor;
  Feature: FeatureConstructor;
  Iteration: IterationConstructor;
  Note: NoteConstructor;
  Notification: NotificationConstructor;
  Project: ProjectConstructor;
  RecordEventRaw: RecordEventRawConstructor;
  Release: ReleaseConstructor;
  Requirement: RequirementConstructor;
  Tag: TagConstructor;
  Task: TaskConstructor;
  TaskUser: TaskUserConstructor;
  Unimplemented: UnimplementedConstructor;
  User: UserConstructor;
  Workflow: WorkflowConstructor;
  WorkflowKind: WorkflowKindConstructor;
  WorkflowStatus: WorkflowStatusConstructor;
}
  interface EnumMap {
  AttachmentSizeEnum: AttachmentSizeEnum;
  AvatarSizeEnum: AvatarSizeEnum;
  CustomFieldableTypeEnum: CustomFieldableTypeEnum;
  EpicOrder: EpicOrder;
  ExtensionFieldableTypeEnum: ExtensionFieldableTypeEnum;
  FeatureOrder: FeatureOrder;
  InternalMeaning: InternalMeaning;
  IterationOrder: IterationOrder;
  NotificationOrder: NotificationOrder;
  NotificationReadEnum: NotificationReadEnum;
  NotificationScopeEnum: NotificationScopeEnum;
  NotificationStarredEnum: NotificationStarredEnum;
  NotificationTypeEnum: NotificationTypeEnum;
  OrderDirection: OrderDirection;
  RecordEventGroupByEnum: RecordEventGroupByEnum;
  RecordEventSubjectEnum: RecordEventSubjectEnum;
  RecordEventTimeSeriesGroupEnum: RecordEventTimeSeriesGroupEnum;
  RecordEventTypeEnum: RecordEventTypeEnum;
  RecordEventValueOperationEnum: RecordEventValueOperationEnum;
  RecordPlacementEnum: RecordPlacementEnum;
  ReleaseOrder: ReleaseOrder;
  RequirementOrder: RequirementOrder;
  TaskStatusEnum: TaskStatusEnum;
  TaskUserOrder: TaskUserOrder;
  TeamAssignableTypeEnum: TeamAssignableTypeEnum;
  WorkUnitEnum: WorkUnitEnum;
}

  type Model = keyof Models;
}

interface Aha {
  models: Aha.Models;
  enums: Aha.EnumMap;
}

declare namespace Aha {
  type GetElementType<T extends Array<any>> = T extends (infer U)[] ? U : never;

  type BelongsTos<T extends ApplicationModel> = {
    [P in keyof T['attributes'] as T['attributes'][P] extends ApplicationModel
      ? P
      : never]: T['attributes'][P] extends ApplicationModel
      ? T['attributes'][P]
      : never;
  };
  type HasManys<T extends ApplicationModel> = {
    [P in keyof T['attributes'] as T['attributes'][P] extends ApplicationModel[]
      ? P
      : never]: T['attributes'][P] extends ApplicationModel[]
      ? GetElementType<T['attributes'][P]>
      : never;
  };
  type Relations<T extends ApplicationModel> = BelongsTos<T> & HasManys<T>;

  type NonRelations<T extends ApplicationModel> = Omit<
    T['attributes'], keyof Relations<T>
  >

  type Subquery<
    T extends ApplicationModel,
    K extends Relations<T> = Relations<T>
  > = {
    [P in keyof K]?: Query<K[P]> | Array<keyof K[P]['attributes']>;
  };

  interface Query<M extends ApplicationModel, Filters = never> {
    /**
    * Unions this query with another query, using GraphQL union
    * types. Should only be used in subqueries.
    *
    * ```
    * Epic.select(['id', 'name'])
    *   .union(Feature.select(['id', 'name']));
    * ```
    */
    union(query: Query<M>): this;
    /**
     * Adds a subquery to select deeply nested records.
     *
     * ```
     * Workflow.select(['id']).merge({
     *   workflowStatuses: WorkflowStatus.select([
     *     'id',
     *     'name',
     *     'color',
     *     'position',
     *   ]),
     * });
     * ```
     *
     * @param subqueries The subqueries to merge into this query, where the key is an attribute name and the value is a Query object.
     */
    merge(subqueries: Subquery<M>): this;
    /**
     * Adds filters to the query
     *
     * ```
     * query.where({projectId: 15})
     * ```
     */
    where(filters: Partial<Filters>): this;
    /**
     * Resets the filters on the query
     *
     * ```
     * query.rewhere({projectId: 15})
     * ```
     */
    rewhere(filters: Partial<Filters>): this;
    /**
     * Adds a criteria for ordering. Will be added to the end of the order list.
     *
     * ```
     * query.order({createdAt: 'ASC'});
     * ```
     */
    order<F extends M['order']>(criteria: Record<F, Aha.OrderDirection['values']>): this;
    /**
     * Resets all criteria for ordering.
     *
     * ```
     * query.reorder({createdAt: 'ASC'});
     * ```
     *
     * @param criteria A one-key object where the key is an order attribute name and the value is a direction
     */
    reorder<F extends M['order']>(criteria: Record<F, Aha.OrderDirection['values']>): this;
    /**
     * Adds `attrs` to the attributes selected by the query.
     *
     * ```
     * query.select(['id', 'name']);
     * ```
     *
     * @param names
     * @returns A Query object selecting `attrs`
     */
    select<F extends keyof M['attributes']>(names: F[]): this;
    /**
     * Adds `attrs` to the attributes selected by the query.
     *
     * ```
     * query.select('id', 'name');
     * ```
     *
     * @param names
     * @returns A Query object selecting `attrs`
     */
    select<F extends keyof M['attributes']>(...names: F[]): this;
    /**
     * Adds `attrs` to the attributes selected by the query, with arguments
     *
     * ```
     * query.select({ avatarUrl: { size: "SIZE_16" }});
     * ```
     *
     * @param selections
     * @returns A Query object selecting `attrs`
     */
    select<F extends keyof M['attributes']>(selections: {
      [P in keyof M['attributes']]?: any;
    }): this;
    /**
     * When paginating, adds `stats` to the page attributes selected by
     * the query.
     *
     * ```
     * query.stats(['isLastPage']);
     * ```
     */
    stats(attrs: string[]): this;
    /**
     * When paginating, selects page `pageNumber`
     *
     * ```
     * query.page(2)
     * ```
     */
    page(pageNumber: number): this;
    /**
     * When paginating, sets the number of results per page
     *
     * ```
     * query.per(50)
     * ```
     */
    per(perPage: number): this;
    /**
     * Adds bare, top-level arguments to the query
     *
     * ```
     * query.argument({timeout: 1000})
     * ```
     */
    argument(args: Record<string, any>): this;
    /**
     * When called, the query will select a single object instead of multiple.
     *
     * ```
     * query.first();
     * ```
     */
    first(): SingleQuery<M, Filters>;

    /**
     * Executes this query, finding a single record by ID.
     */
    find(id: string): Promise<M>;
    /**
     * Executes this query.
     *
     * @returns The requested models, or undefined if it couldn't be found.
     */
    all(): Promise<M[]>;
    /**
     * Fetch *all* records from multiple pages. `pageCallback` will be
     * called for each page as it arrives. If no callback is specified,
     * will return all of the records found. If a callback is specified,
     * it is assumed that the caller will handle the records, and the
     * return value will be empty.
     *
     * @param [pageCallback] a callback called with a list of records for every page as it arrives
     * @returns An array of the requested records, if no callback is given
     */
    findInBatches(pageCallback?: Function): Promise<M[]>;

    readonly model: M;
    /**
     * Returns the name for the query based on the model used to construct it.
     */
    readonly queryName: string;
    /**
     * Returns the plain string version of the GraphQL query corresponding to this object.
     */
    readonly queryString: string;
    /**
     * Returns the variables to send with the graphql query
     */
    readonly queryVariables: Record<string, any>;
    readonly subqueries: Record<string, Query<any>>;
    readonly attrs: Set<string>;
    readonly arguments: Record<string, any>;
    readonly filters: Record<string, any>;
    readonly sort: Record<string, 'ASC' | 'DESC'>;
    readonly single: boolean;
    readonly unions: Record<string, Query<any>>;
  }

  interface SingleQuery<T extends ApplicationModel, Filters = never> extends Omit< Query<T, Filters>, 'all'> {
    all(): Promise<T>;
  }

  /**
   * Functions for getting and setting extension data for a particular model
   */
  interface HasExtensionFields {
    getExtensionFields(identifier: string): Promise<any>;

    /**
     * Get the value of an extension field on this record. This will return
     * null if the value has never been set
     *
     * @param identifier the extension identifier
     * @param fieldName the name of the field
     */
    getExtensionField<T>(
      identifier: string,
      fieldName: string
    ): Promise<T | null>;

    /**
     * Set the value of an extension field for this record
     *
     * @param identifier the extension identifier
     * @param fieldName the name of the field
     */
    setExtensionField(
      identifier: string,
      fieldName: string,
      value: any
    ): Promise<void>;
  }

  /**
   * Options for model constructors
   */
  interface NewModelOptions<
    Model extends ApplicationModel,
    ModelQuery extends Query<Model, any> = Query<Model, any>
  > {
    /**
     * A query object used to reselect attributes after saving
     */
    query?: ModelQuery;
    /**
     * The parent of the model. This is set automatically by queries.
     */
    parent?: RelationshipAttribute<any>;
  }
  
  /**
   * @hidden
   */
  interface ApplicationModelConstructor<
    Model extends ApplicationModel,
    Filters extends {} = never,
    ModelQuery extends Query<Model, Filters> = Query<Model, Filters>,
    Attributes = Model['attributes']
  > {
    readonly typename: Model['typename'];

    /**
     * Adds `attrs` to the attributes selected by the query.
     *
     * ```
     * Feature.select(['id', 'name']);
     * ```
     *
     * @param arguments
     * @returns A Query object selecting `attrs`
     */
    select<F extends keyof Attributes>(names: F[]): ModelQuery;
    select<F extends keyof Attributes>(...names: F[]): ModelQuery;
    /**
     * Adds filters to the query
     *
     * ```
     * Feature.where({projectId: 15})
     * ```
     */
    where(filters: Partial<Filters>): ModelQuery;
    /**
     * Creates a copy of a model that can be used as a "blank" object. A
     * "blank" object, when assigned to an assocation, will null out the
     * association.
     */
    blank(attrs: Partial<Attributes>): Model;

    /**
     * Build a new model from the given attributes
     */
    new(attrs?: Partial<Attributes>, options?: NewModelOptions<Model>): Model;
  }

  type RelationshipAttribute<T extends ApplicationModel> = T & {
    attribute: string;
  };

  interface ApplicationModel {
    readonly typename: string;
    /**
     * `true` if the object is an existing record, `false` otherwise.
     */
    readonly persisted: boolean;
    /**
     * A guaranteed unique identifier for the record. Returns internalObjectId if id is falsy (unsaved).
     */
    readonly uniqueId: string;
    /**
     * ```
     * const feature = await Feature.select('id').merge({'requirements': ['id']}).find('FEAT-1');
     * feature.parent // undefined, this was the root model
     * feature.requirements[0].parent === feature
     * // Get the attribute that loaded the requirement
     * feature.requirements[0].parent.attribute === 'requirements'
     * ```
     *
     * @return The model that loaded this model. This will be undefined for the root model of the query.
     */
    readonly parent?: RelationshipAttribute<any>;

    attributes: {};
    order: string;

    /**
     * Clear the value from an extension field for this record
     *
     * @param identifier the extension identifier
     * @param fieldName the name of the field
     */
    clearExtensionField(
      identifier: string,
      fieldName: string
    ): Promise<void>;

    /**
     * `true` if the object's attributes have been modified, `false` otherwise.
     */
    isDirty(): boolean;
    /**
     * Updates or creates this record using a GraphQL mutation. Will use
     * the `update{ModelName}` or `create{ModelName}` mutations,
     * respectively. Sends all changed attributes and relationships as
     * arguments, and, by default, updates attributes using the query used to
     * construct this object.
     *
     * @param options Data used to modify the mutation query.
     *
     * `options`:
     *   - args: Bare, top-level (non-attribute) arguments passed along with the mutation. These will be at the same level as `id`, for example.
     *   - query: A Query object used to override the default query.
     *
     * @returns `true` if the mutation ran without errors, `false` otherwise.
     */
    save(options?: Partial<{args: any, query: any}>): Promise<boolean>;

    reload<T extends this>(options?: { query?: Query<T> }): Promise<void>;

    /**
      * Load additional attributes from the API:
      *
      * ```
      * const record = await Feature.select('referenceNum').find('REF-123');
      * record.name => null
      * await record.loadAttributes('name');
      * record.name => 'Record 123'
      * ```
      */
    loadAttributes<F extends keyof NonRelations<this>>(...attributes: F[]): Promise<void>;

    /**
     * Destroys this record.
     *
     * @returns `true` if the mutation ran without errors, `false` otherwise.
     */
    destroy(): Promise<boolean>;

    /**
     * Sets the attribute `name` to `value`. This function can be used
     * even if this object didn't declare a setter for the attribute
     * `name`.
     */
    setAttribute<K extends keyof this['attributes']>(
      name: K,
      value: this['attributes'][K],
      flagDirty?: boolean
    ): void;

    /**
     * Sends a GraphQL mutation request, updating the current object from the response.
     *
     * @param mutationName The name of the mutation to call
     * @param options All data passed along to generate the mutation query.
     *
     * `options`:
     *   - args: The arguments passed to the mutation
     *   - query: The Query object used to update data from the mutation response
     *   - stringify: When true, will stringify args using Query.stringifyValue
     *   - cacheId: The key that is expected to be used to cache the result
     *
     * @returns {Promise<boolean>} `true` if the mutation ran without errors, `false` otherwise.
     */
    mutate(mutationName: string, options?: Partial<{ args: any, query: any, stringify: boolean, cacheId: string }>): Promise<boolean>;

    /**
     * Returns a shallow duplicate of this record.
     */
    dup(): this;
  }

  /**
   * @deprecated
   * @hidden
   */
  interface RecordStub extends ApplicationModel {
    id: string;
    referenceNum: string;
    type: string;
  }

  interface EnumValue<T extends string = string, V extends string = string> {
    type: T;
    value: V;
  }

  interface Page<T extends ApplicationModel> {
    currentPage: number;
    isLastPage: boolean;
    nodes: Array<T>;
    totalCount: number;
    totalPages: number;
  }

  /**
   * Access the current settings for an extension
   *
   * @category Extensions
   */
  interface Settings {
    get(name: string): Settings | unknown;
    [index: string]: unknown;
  }

  /**
   * The context for an extension callback
   *
   * @category Extensions
   */
  interface Context {
    settings: Settings;
    identifier: string;
  }

  /**
   * @category Extensions
   */
  interface UpdateCallback {
    (newState: any): Promise<void>;
  }

  /**
   * @category Extensions
   */
  interface RenderExtensionProps {
    isUpdate: boolean;
    onUnmounted: (callback: () => void) => void;
    record?: RecordStub;
    fields?: { [index: string]: unknown };
    update?: UpdateCallback;
    state?: any;
  }

  /**
   * @category Extensions
   */
  interface RenderExtension {
    (props: Aha.RenderExtensionProps, context: Context): void | React.ReactNode;
  }

  /**
   * @category Extensions
   */
  interface CommandExtension<Param> {
    (param: Param, context: Context): void;
  }

  /**
   * @category Extensions
   */
  interface CommandPromptOptions {
    placeholder?: string;
    default?: string;
  }

  /**
   * @category Extensions
   */
  interface AuthOptions {
    reAuth?: boolean;
    useCachedRetry?: boolean;
    parameters?: unknown;
  }

  /**
   * @category Extensions
   */
  interface AuthData {
    token: string;
  }

  /**
   * @category Extensions
   */
  interface AuthCallback {
    (authData: AuthData): void;
  }

  /**
   * @category Extensions Importer
   */
  interface ListFiltersEvent {
    action: 'listFilters';
  }

  /**
   * @category Extensions Importer
   */
  interface ListFilter {
    title: string;
    required: boolean;
    type: 'autocomplete' | 'text' | 'select';
  }

  /**
   * @category Extensions Importer
   */
  interface ListFilters {
    [filterName: string]: ListFilter;
  }
  
  /**
   * @category Extensions Importer
   */
  interface ListFiltersCallback {
    /**
     * Return a list of available filters
     */
    (): ListFilters | Promise<ListFilters>;
  }

  /**
   * @category Extensions Importer
   */
  interface FilterValuesEvent {
    action: 'filterValues';
  }

  /**
   * Some filters will require information from the external server. For
   * example, when filtering to an assigned user, you may want to fetch the
   * list of users from the system you are importing from. filterValues
   * returns the list of possible values for a filter field.
   *
   * @category Extensions Importer
   */
  type FilterValuesCallback = (props: {
    filterName: string;
    filters: { [index: string]: any };
  }) => Promise<FilterValue[]>;

  /**
   * @category Extensions Importer
   */
  interface FilterValue {
    text?: string;
    value: any;
  }

  /**
   * @category Extensions Importer
   */
  interface ListCandidatesEvent {
    action: 'listCandidates';
  }

  /**
   * @category Extensions Importer
   */
  interface ListCandidatesCallback<T extends ImportRecord> {
    (props: { filters: { [index: string]: any }; nextPage?: any }): Promise<
      ListCandidate<T>
    >;
  }

  /**
   * @category Extensions Importer
   */
  interface ListCandidate<T extends ImportRecord> {
    records: T[];
    nextPage?: any;
  }

  /**
   * @category Extensions Importer
   */
  interface RenderRecordEvent {
    action: 'renderRecord';
  }

  /**
   * @category Extensions Importer
   */
  interface RenderRecordCallback<T extends ImportRecord> {
    (props: { record: T; onUnmounted: () => any }): void;
  }

  /**
   * @category Extensions Importer
   */
  interface ImportRecordEvent {
    action: 'importRecord';
  }

  /**
   * @category Extensions Importer
   */
  interface ImportRecordCallback<T extends ImportRecord> {
    (props: { importRecord: T; ahaRecord: Feature }): Promise<void>;
  }

  /**
   * @category Extensions Importer
   */
  interface ImportRecord {
    uniqueId: string;
    name: string;
    identifier?: string;
    url?: string;
  }

  /**
   * @category Extensions Importer
   */
  interface Importer<T extends ImportRecord> {
    on(event: ListFiltersEvent, callback: ListFiltersCallback): void;
    on(event: FilterValuesEvent, callback: FilterValuesCallback): void;
    on(event: ListCandidatesEvent, callback: ListCandidatesCallback<T>): void;
    on(event: RenderRecordEvent, callback: RenderRecordCallback<T>): void;
    on(event: ImportRecordEvent, callback: ImportRecordCallback<T>): void;
  }

  interface PanelOptions {
    name?: string;
  }

  interface PanelSettingsCallback {
    (context: Context): PanelSetting[];
  }

  type PanelSetting = PanelSelectSetting | PanelTextSetting | PanelCheckboxSetting;

  interface PanelSelectSetting {
    key: string;
    title: string;
    type: 'Select';
    updateTitle?: boolean;
    options(): Promise<{ value: any, text: string }[]>
  }

  interface PanelTextSetting {
    key: string;
    title: string;
    type: 'Text';
  }

  interface PanelCheckboxSetting {
    key: string;
    title: string;
    type: 'Checkbox'
  }

  interface RenderPanelProps extends RenderExtensionProps {
    props: {
      panel: { settings: { [index: string]: unknown } };
    };
  }

  interface RenderPanel {
    (props: Aha.RenderPanelProps, context: Context): void | React.ReactNode;
  }

  interface Panel {
    readonly id:string;
    readonly name:string;

    /**
     * Render the panel
     */
    on(event: 'render', callback: Aha.RenderPanel): void;
    /**
     * Fetch available settings for the panel
     */
    on(event: { action: 'settings' }, callback: Aha.PanelSettingsCallback): void;

    trigger<T>(event: string, args: any): T;

    findHandler(event: string): Aha.CommandExtension<any> | undefined;
  }

  interface Drawer {
    /**
     * Get the props for the currently open drawer
     */
    getProps(): unknown;
    /**
     * Show an Aha! record in the drawer
     */
    showRecord(record: ReferenceInterface): Promise<void>;
    /**
     * Show an extension contribution in the drawer
     */
    showExtension(
      identifier: string,
      contribution: string,
      props: object
    ): Promise<void>;
    /**
     * Hide the drawer
     */
    hide(): void;
  }

  interface GraphqlQueryOptions {
    variables: Record<string, any>;
  }

  class ConfigError extends Error {}

  class AuthError extends Error {
    constructor(message: string, service: string, options?: any);
  }

  class Fragment {
    constructor(name?: string, type?: string);
    alias(name: string, type?: string): Fragment;
    attr(...names: string[]): Fragment;
    argument(name: string, value: unknown, type: string): Fragment;
    fragment(fragment: Fragment): Fragment;
    variable(variable: {
      key: string;
      name: string;
      value: unknown;
      type?: string;
    }): Fragment;
    toDocument(
      name?: string,
      operation?: 'query' | 'mutation'
    ): import('graphql').DocumentNode;
    toVariables(): unknown;
    resolve(): Fragment;
    union(): Fragment;
  }
}

declare class Aha {
  /**
   * The current account
   */
  readonly account: Aha.Account;

  /**
   * The current User
   */
  readonly user: Aha.User;

  /**
   * Access the drawer
   */
  readonly drawer: Aha.Drawer;

  /**
   * Register an extension function
   *
   * @param name
   * @param extension
   */
  on<T = Aha.RenderExtension>(name: string, extension: T): void;
  on<Param, T = Aha.CommandExtension<Param>>(name: string, extension: T): void;
  on<Param, T = Aha.CommandExtension<Param>>(name: {event: string}, extension: T): void;

  /**
   * Request user input
   *
   * @param prompt
   * @param options
   */
  commandPrompt(
    prompt: string,
    options?: Aha.CommandPromptOptions
  ): Promise<any>;
  /**
   * Call a registered extension command
   *
   * @param name
   * @param args
   */
  command<T>(name: string, args?: T): void;

  getImporter<T extends Aha.ImportRecord>(identifier: string): Aha.Importer<T>;
  
  getPanel(identifier: string, name: string, options: Aha.PanelOptions): Aha.Panel;

  auth(service: string, options: Aha.AuthOptions): Promise<Aha.AuthData>;
  auth(
    service: string,
    options: Aha.AuthOptions,
    callback?: Aha.AuthCallback
  ): void;

  triggerBrowser(event: string, args: any): void;
  triggerServer(event: string, args: any): void;

  contextForIdentifier(identifier: string): Aha.Context;
  executeExtension(
    identifier: string,
    code: (context: Aha.Context) => void
  ): void;
  getEndpoints(identifier: string): Function[];
  render(
    elements: React.ReactNode,
    node: HTMLElement,
    onUnmounted?: (callback: Function) => void
  ): void;

  /**
   * Sanitize a url. This will remove any embedded javascript and only allow
   * certain data types. Any link that comes from outside of Aha! or from user
   * input should be sanitized:
   *
   * ```
   * return <a href={aha.sanitizeUrl(linkHref)}>Link to record</a>;
   * ```
   */
  sanitizeUrl(url: string | undefined): string;

  /**
   * Perform a graphql query directly against the Aha! API
   */
  graphQuery<T>(queryString: Aha.Fragment, options?: Aha.GraphqlQueryOptions): Promise<T>;
  graphQuery<T>(queryString: string, options?: Aha.GraphqlQueryOptions): Promise<T>;

  /**
   * Perform a graphql mutation directly against the Aha! API
   */
  graphMutate<T>(mutationString: string, options: Aha.GraphqlQueryOptions): Promise<T>;

  /**
   * All active extension settings.
   *
   * ```
   * const mySettings = aha.settings.get('my.extension');
   * const setting = mySettings.aSetting;
   * ```
   */
  settings: Aha.Settings;

  /**
   * Errors
   */

  /**
   * Throw this error to report configuration issues. For example, an importer
   * would throw this if invalid filter values caused an error when querying for
   * records.
   */
  ConfigError: typeof Aha.ConfigError;

  /**
   * Throw this error to manually report authentication errors. This error type
   * is usually thrown automatically during service auth.
   */
  AuthError: typeof Aha.AuthError;

  Fragment: typeof Aha.Fragment;
}

declare const aha: Aha;
declare const csrfToken: () => string;
declare const Env: { [index: string]: string };
